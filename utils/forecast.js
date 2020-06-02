const request = require('request');

const weatherForecast = (lat, long, callback) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a4000c07aca7338dc8473b7397724033`
    request({
        url,
        json: true
    }, (error, response) => {
        if (error) {
            callback({ error: "Something went wrong while fetching weather details" })
        } else {
            callback(response)
        }
    })
}

module.exports = weatherForecast;