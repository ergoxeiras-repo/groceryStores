function errorHandler(error, req, res, next) {
     res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || `Υπήρξε κάποιο πρόβλημε με τον Σέρβερ,
        παρακαλώ δοκιμάστε αργότερα`
     });
}

module.exports = errorHandler;