const geocode = require('../utils/geocodes');
const weatherForecast = require('../utils/forecast');

(
    exports.getWeather = (async (req, res, next) => {
        geocode(req.body.location, (err, resp) => {
            if (err) return res.send(err);
            weatherForecast(resp.latitude, resp.longitude, (weather) => {
                return res.send(weather);
            })
        });
    })
)