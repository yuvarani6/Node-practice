const express = require("express")

const app = express()
const port = 3000

//get method
app.get('/', (req, res) => {
    res.send("Welcome to Homepage!")
})

//to listen the port
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})

//setting any value
app.set("title", "My node page")

//post method
app.post('/api/data', (req, res)=>{
    res.json({
        message: "Hello",
        data: req.body
    })
})

app.use((err, req, res, next)=>{
    console.log(err),
    res.status(500).send("Internal Server Error")
})

