const express = require("express")
const app = express()

const port = 3000
app.listen(port, ()=>{
    console.log("Server is running in the port", {port})
})

const firstMiddleware = (req, res, next)=>{
    console.log("Middleware is running!"),
    next()
}

app.use(firstMiddleware)

app.get('/home', (req, res)=>{
    res.send("Welcome to homepage buddy!")
})

app.get('/about', (req, res)=>{
    res.send("Welcome to about page buddy!")
})