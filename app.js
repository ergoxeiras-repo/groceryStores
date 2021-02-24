const express = require("express");
const path = require("path");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const breadcrumb = require('express-url-breadcrumb');

// VIEW ROUTES
const viewRouter = require("./router/viewRoutes/viewRoutes");

// API ROUTES
const userRouter = require("./router/userRoutes");
const reviewRouter = require("./router/reviewRoutes");
const productRouter = require("./router/productsRoutes");
const vrefikhFrontidaRouter = require("./router/vrefikhFrontidaRoutes");
const kavaRouter = require("./router/kavaRoutes");
const katoikidiaRouter = require("./router/katoikidiaRoutes");
const proswpikhFrontidaRouter = require("./router/proswpikhFrontidaRoutes");
const ugieinhDiatrofhRouter = require("./router/ugieinhDiatrofhRoutes");
const opwropwleioRouter = require("./router/opwropwleioRoutes");
const galaktokomikaEidhPsugeiouRouter = require("./router/galaktokomikaEidhPsugeiouRoutes");
const turiaAllantikaDelicatessenRouter = require("./router/turiaAllantikaDelicatessenRoutes");
const tupopoihmenaTrofhmaRouter = require("./router/tupopoihmenaTrofhmaRoutes");
const freskoKreasPsariRouter = require("./router/freskoKreasPsariRoutes");
const prwinoRofhmataRouter = require("./router/prwinoRofhmataRoutes");
const proiontaArtouRouter = require("./router/proiontaArtouRoutes");
const snacksRouter = require("./router/snacksRoutes");
const katharistikaXartikaEidhOikiakhsRouter = require("./router/katharistikaXartikaEidhOikiakhsRoutes");
const storeLocationRouter = require("./router/storeLocationRoutes");

const throwsAnError = require("./utils/throwsAnError");
const checkAuth = require('./middleware/check-auth');

const app = express();

if(process.env.NODE_ENV !== "test"){
    const limiter = rateLimit({
        max: 100,
        windowMs: 60 * 60 * 1000,
        message: "Too many request, please try again in an hour"
    });
    
    app.use("/api", limiter);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
// app.use(helmet());
// For security reasons we accept body up to 10kb
app.use(express.json()); //{ limit: '10kb' }
app.use(express.urlencoded({extended: true}));
// Data sanitization (Cleaning the income data from malicious code)
// NoSQL data injection
// app.use(mongoSanitize());

// Data sanitization against XSS
// app.use(xss());

//Preventing HTTP parameter poloution
// app.use(hpp());
app.use(breadcrumb());


//VIEW ROUTERS
app.use("/", viewRouter);
app.get("/view/:name", function(req, res) {
    const name = req.params.name;
    res.sendFile(__dirname + `/public/brochures/${name}.pdf`);
});

// API ROUTERS
app.use("/api/users", userRouter);
app.use("/api/review", reviewRouter);
app.use("/api/products", productRouter);
app.use("/api/products/vrefikh-frontida", vrefikhFrontidaRouter);
app.use("/api/products/kava", kavaRouter);
app.use("/api/products/katoikidia", katoikidiaRouter);
app.use("/api/products/proswpikh-frontida", proswpikhFrontidaRouter);
app.use("/api/products/diatrofh", ugieinhDiatrofhRouter);
app.use("/api/products/opwropwleio", opwropwleioRouter);
app.use("/api/products/galaktokomika-kai-eidh-psugeiou", galaktokomikaEidhPsugeiouRouter);
app.use("/api/products/turia-allantika-delicatessen", turiaAllantikaDelicatessenRouter);
app.use("/api/products/tupopoihmena-trofhma", tupopoihmenaTrofhmaRouter);
app.use("/api/products/fresko-kreas-kai-psari", freskoKreasPsariRouter);
app.use("/api/products/prwino-kai-rofhmata", prwinoRofhmataRouter);
app.use("/api/products/proionta-artou", proiontaArtouRouter);
app.use("/api/products/snacks", snacksRouter);
app.use("/api/products/katharistika-xartika-eidh-oikiakhs", katharistikaXartikaEidhOikiakhsRouter);
app.use("/api/stores", storeLocationRouter);

// Error handler for routes that do not exist
app.all("*", (req, res, next) => {
    // res.status(404).send({
    //     message: "The page you are looking for does not exist"
    // });
    const error = new throwsAnError("The page you are looking for does not exist", 404);
    next(error);
});

// Express' error handler middleware
// app.use((error, req, res, next) => {
//     res.status(error.statusCode).json({
//         status: error.status,
//         message: error.message,
//         e: error.e.message ? error.e.message : ""
//     });
    
// });

module.exports = app;