const request = require('request');
const geocode= require('./utils/geocode')
const forecast=require('./utils/forecast')

const address=process.argv[2]

if(!address){
    console.log('please provide address')
}else{
    geocode(address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return console.log(error)
        }
    
        forecast(latitude,longitude, (error, forecastdata) => {
            if(error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastdata)
        })
    })
}











// const url='http://api.weatherstack.com/current?access_key=0858adc402265c27fd39201141bb3f3d&query=37.8267,-122.4233&units=f'

// //we have addded units key for changing the metrics(US)

// request({url: url,json:true},(error,response)=>{
//     if(error){
//         console.log('unable to connect to weather service!')
//     }else if(response.body.error){
//         console.log('unable to find location')
//     }else{
//         console.log("it is currently "+response.body.current.temperature+"degrees out.It feels like "+response.body.current.feelslike)
//     }
// })


// const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address,)}.json?access_token=pk.eyJ1Ijoiam9obnNtaXRoNzgiLCJhIjoiY2tldjFsNnk4MGsyajJybWU4bmRnaWRucCJ9.2QsD-tv8oYpxB8_wVsWpcw&limit=1`'

// request({url:geocodeURL,json:true},(error,response)=>{
//     if(error){
//         console.log('unable to connect to map service!')
//     }else if(response.body.features.length === 0){
//         console.log('unable to search the location')
//     }else{
//         const latitude=response.body.features[0].center[1]
//         const longitude=response.body.features[0].center[0]
//         console.log(latitude,longitude)
//     }
    
// })

//${encodeURIComponent(address,)}
// const geocode=(address,callback)=>{
//     const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address,)+'.json?access_token=pk.eyJ1Ijoiam9obnNtaXRoNzgiLCJhIjoiY2tldjFsNnk4MGsyajJybWU4bmRnaWRucCJ9.2QsD-tv8oYpxB8_wVsWpcw&limit=1`'
//     request({url:url,json:true},(error,response)=>{
//         if(error){
//             callback('unable to connect to location services',undefined)
//         }else if(response.body.features.length===0){
//             callback('unable to find location,search again',undefined)
//         }else{
//             callback(undefined,{
//              latitude:response.body.features[0].center[1],
//              longitude:response.body.features[0].center[0],           
//              location:response.body.features[0].place_name
//             })
//         }
//     })
// }

// geocode('mumbai',(error,data)=>{
//     console.log('error',error)
//     console.log('data',data)
// })

