var weather = require("./weather");
var ip = require("./ip");
var argv = require("yargs")
.options("location", {
    alias: "l",
    demand: false,
    describe: "Location info for weather info.",
    type:"string"
}).help("help").argv;



if(typeof argv.l === "string" && argv.l.length > 0){
    weather(argv.l).then(function(liveWeather){
        console.log(liveWeather);
    }, function(error){
        console.log(error);
    });
}
else{
    ip().then(function(location){
        return weather(location);
    }).then(function(liveWeather){
        console.log(liveWeather);
    }).catch(function(error){
        console.log(error);
    });
};