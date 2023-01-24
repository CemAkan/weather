var weather = require("./weather");
var ip = require("./ip");

ip(function(location){
    weather(location, function (currentWeather) {
        console.log(currentWeather);
    })
});
