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
            callback(undefined, {
                summary: body.daily.data[0].summary,
                temperature: body.currently.temperature,
                rain: body.currently.precipProbability
            })
        }
    })
}

module.exports = forecast