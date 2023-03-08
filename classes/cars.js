'use strict';
var fs = require('fs')

module.exports = class Cars {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
 
    whatCar(){
        var carFile = require("../models/cars.json");
         // these next lines make a new xomment based on the text box inputs
         var newCar = {
                            Make: this.make,
                            Model: this.model
        
                          }
  // this next line creates a function to write back to the file we opened    
                     fs.readFile('./models/cars.json', 'utf8',  function readfileCallback(err){
                      // this if statement looks for an error if there is one 
                      if(err) {
                          throw(err)
                          
                      } else {
                          // these next lines of code send the new comment back to the file we opened above
                        carFile.push(newCar); // add the new data to the JSON file
                        var json = JSON.stringify(carFile, null, 4); // this line structures the JSON so it is easy on the eye
                          fs.writeFile('./models/cars.json',json, 'utf8', function(){})
                          
                      }
                      
              
                    });
              
        
           }


      static allCars(){
            var allCars = require("../models/cars.json");
            return allCars
           }
   
}