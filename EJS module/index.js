const express = require('express')
const path = require('path')
const port = 3000

const app = express()



//set ejs as view engine
app.set("view engine", "ejs")

//set directory for views
app.set("views", path.join(__dirname, "views"))



const products = [
    { id: 1, name: "Product 1"}, { id: 2, name: "Product 2"}, { id: 3, name: "Product 3"}, 
]

app.get('/home', ((req, res)=>{
    res.render('home', {title:"Home", products : products})
}))

app.get('/about', ((req, res)=>{
    res.render('about', {title:"About"})
}))

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})