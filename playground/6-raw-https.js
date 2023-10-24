

const http = require('http')
const url='http://api.weatherstack.com/current?access_key=0858adc402265c27fd39201141bb3f3d&query=45,-75&units=f'

const request=http.request(url,(response)=>{

    let data=''

    response.on('data',(chunk)=>{
        data=data+chunk.toString()
        console.log(chunk)
    })
    response.on('end',()=>{
        const body=JSON.parse(data)
        console.log(body)
    })
})

request.on('error',(error)=>{
    console.log('an error',error)
})

request.end()