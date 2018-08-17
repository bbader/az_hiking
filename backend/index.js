

var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    expressSanitizer    = require("express-sanitizer"),
    methodOverride      = require('method-override'),
    mongoose        = require("mongoose");

var PORT = process.env.PORT || 3000;

var trails    = require("./routes/trails");

//var url = process.env.DATABASEURL || "mongodb://localhost:27017/AzHiking" ;
var url = process.env.DATABASEURL || "mongodb://bbader:vN4U258y9ZWo4uT@ds235239.mlab.com:35239/az_trails";

mongoose.connect(url, { useNewUrlParser: true }  );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(expressSanitizer());
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("trails");
 });

app.use("/trails", trails);



 
app.listen(PORT, () => {
 console.log("Server listening on port " + PORT);
});