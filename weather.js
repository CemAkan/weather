var request = require("request");
var key = "a06972ab30064f14b05131806232301";
var url = "http://api.weatherapi.com/v1/current.json?key=";
var location ="Hatay";
var finalUrl = url + key + "&q=" + location;

module.exports =  function(callback){
    request(finalUrl, (error, response, body)=>{
    
        if(error) callback("Weather infos couldn't find.");
    
        var data = JSON.parse(body);
    
        callback(`In ${data.location.name} temperature is ${data.current.temp_c}`);
    
    });
}

