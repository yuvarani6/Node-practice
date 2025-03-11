const express = require("express")

const app = express()

app.get('/', (req, res)=>{
    res.send('Hello World from Express!!')
})

const port = 3000
app.listen(port, ()=>{
    console.log(`Server is listening to the port ${port}`)
})