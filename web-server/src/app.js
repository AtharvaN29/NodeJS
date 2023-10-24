const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const app= express()


//define paths for express config
app.use(express.static(path.join(__dirname,'../public')))
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')


//setup handlebars enginer and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory
app.get('',(req,res)=>{
    res.render('index',{
        title:'weather app',
        name:'atharva'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about me',
        name:'anish'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        forecast:'it is raining',
        title:'helpppp',
        name:'arjun'
    })
})

app.get('',(req,res)=>{
    res.send('<h1>weather</h1>')  //send back html
})       //takes two args , particular url & function

// app.get('/help',(req,res)=>{    //send back objects
//     res.send({
//         name:atharva,
//         age:18
//     })
// })


app.get('/about',(req,res)=>{
    res.send('<h1>about</h1>')
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'you must provide an address !!'
        })
    }

    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send({error})
        }
        forecast(latitude,longitude,(error,forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })    
    // res.send({
    //     forecast:'it is snowing',
    //     location:'mumbai',
    //     address: req.query.address
    // })
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'you must provide a search term'
        })
    }

    res.send({
        products:[]
    })
})

app.get('/help/*',(req,res)=>{
    res.send('help article not found')
})

app.get('*',(req,res)=>{
    res.send('404',{
        title:404,
        name:'atharva',
        errormessage:'page not found'
    })
}) //put in last beacuse it checks aeverything above the function

app.listen(3000,()=>{
    console.log('server is up!!')
})    //starts the server (3000- port number)

//it stays up & running until someone stops

