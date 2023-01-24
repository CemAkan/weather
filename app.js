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
    weather(argv.l, function (currentWeather) {
        console.log(currentWeather);
    });
}
else{
    ip(function(location){
        weather(location, function (currentWeather) {
            console.log(currentWeather);
        });
    });
}