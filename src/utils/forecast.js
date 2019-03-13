const request = require('request')

//const {temperature,precipProbability:rain} = response.body.currently
//const {summary} = response.body.daily.data[0]

const forecast = (lat,long,callback)=>{
    const url = 'https://api.darksky.net/forecast/c00caeece3bb0746e2a4b5566fc05dde/'+lat +','+ long +'?units=si'
    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location', undefined)
        }
        else if(body.error){
            callback('Unable to find location',undefined)
        }
        else{
           // console.log(body.daily.data[0])
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + 
            body.currently.temperature + ' degress out. There is a ' 
            + body.currently.precipProbability + '% chance of rain.'
            + 'The hight temperature is: '+ body.daily.data[0].temperatureHigh
            + ' and the low temperature is: '+ body.daily.data[0].temperatureLow)
        }
    })
}

module.exports = forecast