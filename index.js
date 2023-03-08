var express = require("express"); // call express to be used by the application.
var app = express();
app.set('view engine', 'ejs'); // Set the template engine (thanks Kevin!)
app.use(express.static("views")); // Allow access to views folder
app.use(express.static("models")); // Allow access to models folder

var bodyParser = require("body-parser") // call body parser module and make use of it
app.use(bodyParser.urlencoded({extended:true}));

var Cars = require("./classes/cars.js");


// function to render the home page
app.get('/', function(req, res){


    var youDrive = new Cars("Nissan", "Skyline");
        var xxx = youDrive.whatCar()
              
        res.render("home", {xxx}); 

});


app.get('/allcars', function(req, res){
  var carList  = Cars.allCars()      
  res.render("allcars", {carList}); 

});



// function to render the new page
app.get('/newcar', function(req, res){
     
        res.render("newcar"); 

});


app.post('/newcar', function(req, res){

    var youDrive = new Cars(req.body.theMake, req.body.theModel);
        var xxx = youDrive.whatCar()
        res.render("home"); 

});



// We need to set the requirements for teh application to run

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0" , function(){
  console.log("App is Running ......... Yessssssssssssss!")
});