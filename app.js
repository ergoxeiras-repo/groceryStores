const express = require("express");
const path = require("path");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const compression = require("compression");

const errorHandler = require("./middleware/errorHandler");
const ThrowsAnError = require("./utils/throwsAnError");

// API ROUTES
const userRouter = require("./router/userRoutes");
const reviewRouter = require("./router/reviewRoutes");
const searchRouter = require("./router/searchRoutes");
const babyCareRouter = require("./router/products/babyCareRoutes");
const drinksRouter = require("./router/products/drinksRoutes");
const frozenFoodsRouter = require("./router/products/frozenFoodsRoutes");
const petsRouter = require("./router/products/petsRoutes");
const personalCareRouter = require("./router/products/personalCareRoutes");
const healthyDietRouter = require("./router/products/healthyDietRoutes");
const fruitStoreRouter = require("./router/products/fruitStoreRoutes");
const refrigeratedItemsRouter = require("./router/products/refrigeratedItemsRoutes");
const cheeseAndDelicatessenRouter = require("./router/products/cheeseAndDelicatessenRoutes");
const standardFoodsRouter = require("./router/products/standardFoodsRoutes");
const fishAndMeatRouter = require("./router/products/fishAndMeatRoutes");
const breakfastRouter = require("./router/products/breakfastRoutes");
const breadProductsRouter = require("./router/products/breadProductsRoutes");
const snacksRouter = require("./router/products/snacksRoutes");
const cleanAndHouseholdRouter = require("./router/products/cleanAndHouseholdRoutes");

const app = express();

if(process.env.NODE_ENV !== "test"){
    const limiter = rateLimit({
        max: 100,
        windowMs: 60 * 60 * 1000,
        message: "Too many request, please try again in an hour"
    });
    
    app.use("/api", limiter);
}

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
app.use(compression());

// API ROUTERS
app.use("/api/v1/users", userRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/products", searchRouter);
app.use("/api/v1/products/vrefikh-frontida", babyCareRouter);
app.use("/api/v1/products/kava", drinksRouter);
app.use("/api/v1/products/katepsugmena-trofima", frozenFoodsRouter);
app.use("/api/v1/products/katoikidia", petsRouter);
app.use("/api/v1/products/proswpikh-frontida", personalCareRouter);
app.use("/api/v1/products/diatrofh", healthyDietRouter);
app.use("/api/v1/products/opwropwleio", fruitStoreRouter);
app.use("/api/v1/products/galaktokomika-kai-eidh-psugeiou", refrigeratedItemsRouter);
app.use("/api/v1/products/turia-allantika-delicatessen", cheeseAndDelicatessenRouter);
app.use("/api/v1/products/tupopoihmena-trofhma", standardFoodsRouter);
app.use("/api/v1/products/fresko-kreas-kai-psari", fishAndMeatRouter);
app.use("/api/v1/products/prwino-kai-rofhmata", breakfastRouter);
app.use("/api/v1/products/proionta-artou", breadProductsRouter);
app.use("/api/v1/products/snacks", snacksRouter);
app.use("/api/v1/products/katharistika-xartika-eidh-oikiakhs", cleanAndHouseholdRouter);

// Error handler for routes that do not exist
app.all("*", (req, res, next) => {
    next(new ThrowsAnError("Η σελίδα που ψάχνεται δεν υπάρχει", 404));
});

app.use(errorHandler);

module.exports = app;