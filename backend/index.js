

var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose");

var PORT = process.env.PORT || 3000;

var url = process.env.DATABASEURL || "mongodb://localhost:27017/AzHiking"
mongoose.connect(url, { useNewUrlParser: true }  );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post("/addtrail", (req, res) => {

});


app.get("/", (req, res) => {
 res.send("Hello World");
});
 
app.listen(PORT, () => {
 console.log("Server listening on port " + PORT);
});