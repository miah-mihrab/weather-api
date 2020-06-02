const router = require('express').Router();

const { getCoordinates } = require('../controllers/LocationController');


router.post('/location/co-ordinates', getCoordinates);

module.exports = router;
