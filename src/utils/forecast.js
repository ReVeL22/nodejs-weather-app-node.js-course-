const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/932757f66e3d04c99ea9041245c2876e/' + latitude + ',' + longitude + '?units=si'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if(body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, body.daily.data[0].summary + 'It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.' + ' Max Temperature: ' + body.daily.data[0].temperatureMax + ' degrees. Min temperature: ' + body.daily.data[0].temperatureMin + ' degrees.')
        }
    })
}

module.exports = forecast