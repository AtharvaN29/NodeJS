const request=require('request')

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address,)+'.json?access_token=pk.eyJ1Ijoiam9obnNtaXRoNzgiLCJhIjoiY2tldjFsNnk4MGsyajJybWU4bmRnaWRucCJ9.2QsD-tv8oYpxB8_wVsWpcw&limit=1`'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('unable to connect to location services',undefined)
        }else if(body.features.length===0){
            callback('unable to find location,search again',undefined)
        }else{
            callback(undefined,{
             latitude:body.features[0].center[1],
             longitude:body.features[0].center[0],           
             location:body.features[0].place_name
            })
        }
    })
}

module.exports=geocode