const request = require('request')
require('dotenv').config()
const api_key = process.env.API_KEY



const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=37.8267,-122.4233`

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.current)
    console.log('It is currently ' + response.body.current.temperature + ' degree out. ' + 'It feels like ' + response.body.current.feelslike + ' degreess out.')
})