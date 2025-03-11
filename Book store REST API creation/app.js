const express = require('express')
const app = express()

const port = 3000

const books = [
    {
        id:1, 
        title : 'Book 1'
    },
    {
        id:2, 
        title : 'Book 2'
    },
    {
        id:3, 
        title : 'Book 3'
    },
]


app.use(express.json())

app.get('/', ((req, res)=>{
    res.status(200).json({
        message : 'Welcome to the Book Store',
    })
}))

app.get('/getBooks', ((req, res)=>{
    res.status(200).json(books)
}))

app.get('/getBooks/:id', ((req, res)=>{
    const bookID = req.params.id
    const singleBook = books.find((bookItem)=> bookItem.id === parseInt(bookID))

    if(singleBook){
        res.status(200).json({
            data: singleBook,
            message: "Book found successfully!"
    })
}
    else{
        res.status(404).json({
            message: "Book not found. Please find with another book id"
        })

        }

    }
)
)


app.post('/add-book', ((req,res)=>{
    const newBook = {
        id : books.length + 1,
        title : `Book ${books.length + 1}`


        
    }
    books.push(newBook)

    res.status(200).json({
        data: newBook, 
        message: `Book added Successfully`
    })
}))


app.put('/update/:id', ((req, res)=>{
    const findBook = books.find((book)=> book.id === parseInt(req.params.id))
    if(findBook){
        findBook.title = req.body.title || findBook.title

        res.status(200).json({
            data: findBook,
            message: `Book updated successfully`
        })
    }
    else{
        res.status(404).json({
            message: "Book not found. Cannot be updated"
    })

    }
    }))

    app.delete('/delete/:id', ((req, res)=>{
        const findBook = books.find((book)=> book.id === parseInt(req.params.id))
        if(findBook){
            const delebook = books.splice(findBook, 1)
            res.status(200).json({
                data: delebook,
                message: `Book deleted successfully`
            })
        }
            else{
                res.status(404).json({
                    message: "Book not found. Cannot be deleted"
            })
        }
    }))


    app.listen(port, ()=>{
        console.log(`Server is running on port ${port}`)
    })