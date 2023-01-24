var request = require("request");
var url="https://ipinfo.io?token=";
var token="be08fcb77e2227";
var finalUrl=url+token;

module.exports =  function(callback){
    request(finalUrl, (error, response, body)=>{
    
        if(error){
            callback("Ip infos couldn't get.");
        };

        var data = JSON.parse(body);
        var location = data.city;
        callback(location);
    });
}

