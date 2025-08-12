const express = require('express')
const app = express()

// app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res,next)=>{
    console.log('welcome')
    res.send(`<h1><a href="/contact">contact</a></h1>`)

})
app.get('/contact',(req,res,next)=>{
     res.send(`<form action="/submit" method="POST">
        <label for="name">Name:</label>
        <input type="text" name="name" placeholder="enter your name">
        <label for="email">Email:</label>
        <input type="text" name="email" placeholder="enter your email">
        <button type="submit">Submit</button>
        </form>`)
})
app.post('/submit',(req,res,next)=>{
    // const { name, email } = req.body;
    res.send(`<h1>Form submitted successfully!</h1>`)
})

const port = 3006

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 