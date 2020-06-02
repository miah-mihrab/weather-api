const router = require('express').Router();

const { getWeather } = require('../controllers/WeatherController');


router.post('/weather', getWeather);

module.exports = router;
