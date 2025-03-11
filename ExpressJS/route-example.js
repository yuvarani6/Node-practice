const express = require("express");

const app = express()
const port = 3000

app.listen(port, ()=>{
    console.log(`Server is listening the port ${port}`)
})

app.get('/home', ((req, res) => {
    res.send('Welcome to home page')
}
))

app.get('/products', ((req, res)=>{
    const products = [
        {id: 1, 
            name: 'Product 1',
        }, 
        {id: 2, 
            name: 'Product 2',
        }, 
        {id: 3, 
            name: 'Product 3',
        } 
    ]

    res.json(products)
}))

app.get('/products/:id', ((req, res)=>{
    const productId = parseInt(req.params.id)

    const products = [
        {id: 1, 
            name: 'Product 1',
        }, 
        {id: 2, 
            name: 'Product 2',
        }, 
        {id: 3, 
            name: 'Product 3',
        } 
    ]

    const getSingleProduct = products.find((product) => product.id === productId)
    if(getSingleProduct){
        res.send(getSingleProduct)
    }
    else{
        res.status(404).send(`Unfortunatey, can't find the product!`)
    }
    
}))