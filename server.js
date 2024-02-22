// const http = require('http')
// // console.log(http)
// const server = http.createServer((req,res) => {
// //console.log(req);
// if(req.url === '/'){
//     res.setHeader('Content-Type', 'text/plain')

//     res.end('<h1>hello world</h1>')

// }
// else if(req.url === '/about'){

//     res.setHeader('Content-Type', 'text/plain')

//     res.end('about page')
// }


// })

// const PORT = 7000



// server.listen(PORT,() =>{
//     console.log('the server is running on port ' + PORT);
// })



const http = require('http')
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/routes')
const cookiePaser = require('cookie-parser')
const errorhandler = require('./middleware/errormiddleware')
const dotenv=require('dotenv').config()


//const bodyParser = require('bodyParser')
//console.log(express);

//middleware
const app = express()
app.use(express.json());
app.use(cookiePaser())


//help to pass data or accept data as json
app.use(express.urlencoded({extended: true}));
app.use(router)
app.use(errorhandler)



// app.use(bodyparser.json());



// app.get('/',(req, res)=>{

//    // res.send('server running using express')
//    res.status(200).json('home page')

// })

// app.post

// app.post('/about',(req, res) => {

//     res.status(200).json('about page  ')
//     const name = req.body.name
//     const email = req.body.email
//     const password = req.body.password


// })





mongoose.connect('mongodb+srv://atandaismailabidemi:xHNPPsWiG363Ogcz@cluster0.zthipzv.mongodb.net/?retryWrites=true&w=majority').then(() =>{
    app.listen('7000','localhost',()=> {
        console.log('server is running on port 7000')
    })
})