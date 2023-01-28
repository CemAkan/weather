var request = require("request");
require("dotenv").config();
var url = "https://ipinfo.io?token=";
var token = process.env.TOKEN;
var finalUrl = url + token;

module.exports = function ip() {
  return new Promise(function (resolve, reject) {
    request(finalUrl, (error, response, body) => {
      if (error) {
        reject();
      } else {
        var data = JSON.parse(body);
        var location = data.city;
        resolve(location);
      }
    });
  });
};
