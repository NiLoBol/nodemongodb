var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const products = require("./routes/Product");
const reactViews = require('express-react-views');
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb+srv://NiLoBol:13112542aA@atlascluster.ooxbnzi.mongodb.net/")
  .then(() => console.log("connect mongo"))
  .catch((err) => console.log(err));

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var ProductsRouter = require("./routes/productview");

var app = express();

app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
  next();
})

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'js'); // เปลี่ยนเป็น 'js'

// อย่าลืมติดตั้งตัวแปรของ reactViews.createEngine() หรือโค้ดที่ใช้ในการ render JSX
app.engine('js', reactViews.createEngine());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);


app.use("/product",ProductsRouter );
app.use("/products", products);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
