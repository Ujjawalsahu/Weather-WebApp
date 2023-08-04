const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express();
const port = 8000;

// public static path
const publicPath = path.join(__dirname,"../public")
const templatePath = path .join(__dirname,"../templates/views") 
const partialsPath = path.join(__dirname,"../templates/partials")

// make public folder static
app.use(express.static(publicPath))

hbs.registerPartials(partialsPath); 

app.set('view engine','hbs')
app.set('views',templatePath)

app.get('',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/weather',(req,res)=>{
    res.render('weather')
})

app.get('*',(req,res)=>{
    res.render("error404",{
        errorMsg: "Opps! Page Not Found"
    })
})

app.listen(port,()=>{
    console.log(`server is running at http://localhost:8000/`)
})