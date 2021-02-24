const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../model/userModel");
const throwsAnError = require("../../utils/throwsAnError");
const sendEmail = require("../../utils/sendEmail");
const { promisify } = require("util");

exports.signup = async function (req, res, next) {
    const {email, username, password, confirmPassword} = req.body;

    if(!isEmailExist(email, next)) {
        return;
    }

    if(!isUsernameExist(username, next)) {
        return;
    }

    if(!isPasswordExist(password, next)) {
        return;
    }

    if(!isConfirmPasswordExist(confirmPassword, next)) {
        return;
    }
    
    if(!arePasswordsEqual(password, confirmPassword, next)) {
        return;
    }

    // await does not work inside if statement
    const isExist = await isEmailInUse(email, next);

    if(!isExist) {
        return;
    }
        
    try{
        const user = await User.create({
            email: email,
            userName: username,
            password: password,
            confirmPassword: confirmPassword
        });
        res.status(200).json({
            message: "success",
            data: user
        });
    }
    catch(e){
        next(new throwsAnError("Ο χρήστης δεν μπορεί να δημιουργηθεί", 400, e));
    }    
}

exports.login = async function (req, res, next) {
    const {email, password} = req.body;

    if(!isEmailExist(email, next)) {
        return;
    }

    if(!isPasswordExist(email, password, next)) {
        return;
    }

    try {
        // await does not work inside if statement
        const isExist = await isUserExist(email, next);

        if(!isExist) {
            return;
        }

        const user = await User.findOne({email});

        const isCorrect = await isThePasswordCorrect(user, password, next);

        if(!isCorrect) {
            return;
        }

        const token = jwt.sign({id: user._id}, "thisismysecretpowerful@ndr@ndomp@ssaword");

        res.cookie("jwt", token, {
            httpOnly: true
        });

        res.status(200).json({
            message: "Success",
            data: {
                id: user._id,
                userName: user.userName,
                email: user.email
            },
            token: token
        });
    } catch (e) {
        next(new throwsAnError("Η σύνδεση απέτυχε", 400, e));
    }
}

exports.logout = function(req, res) {
    res.cookie("jwt", "loggedout", {
        expires: new Date(0), //Date.now() + 10000
        httpOnly: true 
    });
    
    res.status(200).json({
        message: "success"
    });
}

exports.forgotPassword = async function (req, res, next) {
    const {email} = req.body;

    const user = await User.findOne({email});

    // await does not work inside if statement
    const isExist = await isUserExist(email, next);

    if(!isExist) {
        return;
    }

    //Generate a random token
    const resetToken = user.createResetToken();
    await user.save({ validateBeforeSave: false });//In order the changes from the model function to apply 
    //we must save the changes because the function only modify the DB. We use validateBeforeSave because 
    //we do not specify the required values
    
    //Send it to the users e-mail
    const resetURL = `${req.protocol}://${req.get('host')}/api/users/resetPassword/${resetToken}`;

    const message = `Ξεχάσατε τον κωδικό σας; Αλλάξτε τον στον παρακάτω σύνδεσμο: ${resetURL}.\nΕάν δεν ξεχάσατε τον κωδικόσας, παρακαλώ αγνοήστε αυτο το email!`;
    try {
        await sendEmail({
        email,
        subject: 'Αλλαγή κωδικού πρόσβασης (ισχύει για 10 λεπτά)',
        message
        });

        res.status(200).json({
        message: 'Token sent to email!'
        });
    } catch (err) {
        user.passwordResetToken = undefined;
        user.passwordResetTokenExp = undefined;
        await user.save({ validateBeforeSave: false });
        
        return next(new throwsAnError('Υπήρξε πρόβλημα στην αποστολή του email. Δοκιμάστε αργότερα!', 500));
    }
}

exports.resetPassword = async function (req, res, next) {
    const token = req.params.token;
    hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetTokenExp: { $gt: Date.now() }
    });

    if(!user) {
        return next(new throwsAnError("Το χρονικό όριο έχει λήξει, παρακαλώ προσπαθήστε ξανά", 400));
    }

    const { password, confirmPassword } = req.body;

    user.password = password;
    user.confirmPassword = confirmPassword;
    user.passwordResetToken = undefined;
    user.passwordResetTokenExp = undefined;
    await user.save();

    res.status(200).json({
        message: "Ο κωδικός πρόσβασης άλλαξε επιτυχώς"
    });
}

exports.updatePassword = async function (req, res, next) {
    let { newPassword, confirmNewPassword } = req.body;

    if(!arePasswordsEqual(newPassword, confirmNewPassword, next)) {
        return;
    }

    user.password = newPassword;
    user.confirmPassword = confirmNewPassword;
    await user.save();

    res.status(200).json({
        message: "Ο κωδικός πρόσβασης άλλαξε επιτυχώς"
    });

}

exports.isLoggedIn = async function(req, res, next) {
    if (req.cookies.jwt) {
        try {
          // 1) verify token
          const decoded = await promisify(jwt.verify)(
            req.cookies.jwt,
            "thisismysecretpowerful@ndr@ndomp@ssaword"
          );
    
          // 2) Check if user still exists
          const currentUser = await User.findById(decoded.id);
          if (!currentUser) {
            return next();
          }
    
          // THERE IS A LOGGED IN USER
          res.locals.user = currentUser;
          return next();
        } catch (err) {
            console.log(err);
          return next();
        }
    } else {
        res.locals.user = " ";
        next();
    }
}

function isEmailExist(email, next) {
    if(!email) {
        next(new throwsAnError("Συμπληρώστε το e-mail", 400));
        return false;
    } 
    return true;
}

function isUsernameExist(username, next) {
    if(!username) { 
        next(new throwsAnError("Συμπληρώστε το όνομα χρήστη", 400));
        return false;
    } 
    return true;
}

function isPasswordExist(password, next) {
    if(!password) {
        next(new throwsAnError("Συμπληρώστε τον κωδικό χρήστη", 400));
        return false;
    } 
    return true;
}

function isConfirmPasswordExist(confirmPassword, next) {
    if(!confirmPassword) {
        next(new throwsAnError("Επαληθεύστε τον κωδικό σας", 400));
        return false;
    } 
    return true;
}

function arePasswordsEqual(password, confirmPassword, next) {
    if(password !== confirmPassword) {
        next(new throwsAnError("Οι κωδικοί δεν ταιριαζουν", 400));
        return false;
    } 
    return true;
}

async function isEmailInUse(email, next) {
    const user = await User.findOne({email});
    if(user) {
        next(new throwsAnError("Το e-mail χρησιμοποιειται", 400));
        return false;
    }
    return true;
}

async function isUserExist(email, next) {
    const user = await User.findOne({email});
    if(!user) {
        next(new throwsAnError("Λανθασμένο email", 400));
        return false;
    }
    return true;
}

async function isThePasswordCorrect(user, password, next) {
    const isCorrect = await bcrypt.compare(password, user.password);
    if(!isCorrect) {
        next(new throwsAnError("Λανθασμένος κωδικός πρόσβασης", 401));
        return false;
    }
    return true;
}

exports.isEmailExist = isEmailExist;