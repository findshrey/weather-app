const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/7377fbd0560add83270a50dd94df80aa/${latitude},${longitude}`

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', null)
    } else if (response.body.error) {
        callback('Unable to find location', null)
    } else {
        callback(null, `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
    }
  })
}

module.exports = forecast