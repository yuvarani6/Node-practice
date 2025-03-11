const express = require('express')
const app=express()

const port = 3000
app.listen(port, () => {
    console.log(`Server is listening the port, ${port}`)
})

const custom = (req, res, next)=>{
    const timestamp = new Date().toISOString()
    console.log(`${timestamp} from ${req.method} to ${req.url}`)
}

app.use(custom)

app.get('/', ((req, res)=>{
    res.send('Welcome to homepage')

}))


app.get('/about', ((req, res)=>{
    res.send('Welcome to about page')
}))


