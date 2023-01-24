var request = require("request");
var key = "a06972ab30064f14b05131806232301";
var url = "http://api.weatherapi.com/v1/current.json?key=";


module.exports =  function(location, callback){
   var fixedLocation =encodeURIComponent(location); // boşlukları %20 ile değiştirir.

    if(!location){
       return callback("Location can't foud");
    }
    else{
        var finalUrl = url + key + "&q=" + fixedLocation;

        request(finalUrl, (error, response, body)=>{
        if(error) callback("Weather infos couldn't find.");

        try{var data = JSON.parse(body);

        callback(`In ${data.location.name} temperature is ${data.current.temp_c} Celcius.`);
        }catch{
            console.log("Please write real city name.")
        }
    });


    }

};


