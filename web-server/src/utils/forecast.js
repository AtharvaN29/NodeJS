const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=0858adc402265c27fd39201141bb3f3d&query='+latitude+','+longitude+'&units=f'

    request({url,json:true},(error,{body})=>{
        if(error){
            callback('unable to connect to services',undefined)
        }else if(body.error){
            callback('unable to fetch location',undefined)
        }else{
            callback(undefined,body.current.temperature+" degrees out.It feels like "+body.current.feelslike)
        }
    })
}

module.exports=forecast