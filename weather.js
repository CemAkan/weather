var request = require("request");
var url = "http://api.weatherapi.com/v1/current.json?key=";

require("dotenv").config();
var key = process.env.KEY;

module.exports = function (location, callback) {
  return new Promise(function (resolve, reject) {
    var fixedLocation = encodeURIComponent(location); // Kullanıcıdan alınan veride boşluk varsa boşlukları " %20 " ile değiştirir.

    if (!location) {
      return reject("Location can't foud");
    } else {
      var finalUrl = url + key + "&q=" + fixedLocation;

      request(finalUrl, (error, response, body) => {
        if (error) reject("Weather infos couldn't find.");

        try {
          var data = JSON.parse(body);
          resolve(
            `In ${data.location.name} temperature is ${data.current.temp_c} Celcius.`
          );
        } catch {
          reject("Please write real city name.");
        }
      });
    }
  });
};
