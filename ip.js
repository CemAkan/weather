var request = require("request");
var url="https://ipinfo.io?token=";
var token="be08fcb77e2227";
var finalUrl=url+token;

module.exports =  function ip (){
    return new Promise(function(resolve,reject){
        request(finalUrl, (error, response, body)=>{
    
            if(error){
              reject();
            }else{
                var data = JSON.parse(body);
                var location = data.city;
                resolve(location);
            };
        });
    });
};