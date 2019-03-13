
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading ...'
    messageTwo.textContent = ' '

    fetch('http://localhost:3000/weather?address='+ location).then((response)=>
    {
        response.json().then((data) => {
            if(data.error){
                //console.log(data.error)
                messageOne.textContent = data.error
            }
            else {
                messageOne.textContent = data.location

               // messageTwo.textContent = 'Summary: ' + JSON.stringify(data.forcast.summary) + 
               //messageTwo.textContent = JSON.stringify(data.forcast)

                console.log(data.location)

                console.log(typeof(messageTwo))
               // const summary = JSON.stringify(data.forcast.summary)
                //const temperature = data.forcast.temperature
               // const rain = data.forcast.rain
               // console.log(typeof(rain))
                 messageTwo.textContent = 'Summary: ' + data.forcast.summary + ' \nTemperature: '+ data.forcast.temperature +' \nRain: '+ data.forcast.rain 
                //console.log(JSON.stringify(data.forcast))
                //console.log('Summary: '+ summary, '\n temperature: '+ temperature, '\n rain: '+ rain)
                //messageTwo = summary
               // messageTwo = 'Summary: '+ summary +'  temperature: '+ temperature+ ' rain: '+ rain
            }
        })
    })

    console.log(location)
})