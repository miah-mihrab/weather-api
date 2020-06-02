const request = require('request');


const geocode = (location, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoibWlocmFiIiwiYSI6ImNrYXhxNWt1NTA4ZnMyc285ZnQ4eTJiZG4ifQ.2sYKfCuUIILbf04RJdnJDw`
    request({
        url,
        json: true
    }, (error, response) => {
        if (error) {
            callback({ error: "Something went wrong" }, undefined)
        } else if (response.body.features.length === 0) {
            callback({
                message: "Unable to find location with this address"
            }, undefined)
        }
        else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
            })
        }
    })
}
module.exports = geocode;