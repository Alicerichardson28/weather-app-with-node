const request = require('request')
require('dotenv').config()
const weather_api_key = process.env.API_KEY
const geocod_api_key = process.env.GEOCODING_API_KEY



const weatherURL = `http://api.weatherstack.com/current?access_key=${weather_api_key}&query=37.8267,-122.4233&units=f`

request({ url: weatherURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degree out. ' + 'It feels like ' + response.body.current.feelslike + ' degreess out.')
    }
})

const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/colorado.json?access_token=${geocod_api_key}&limit=1`

request({ url: geocodeURL, json: true}, (error, response ) => {
    if (error) {
        console.log('Unable to connect to location services')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find this location, please try a different location')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
})