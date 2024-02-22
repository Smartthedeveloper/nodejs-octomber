const express = require ('express')
//const regController = require('./controller/register')
const {regController, aboutController} = require('../controller/register')
const {userController} = require('../controller/userController')
const {getusers,getsingleusers, updateallusers, deleteoneuser} = require('../controller/userController')
const {productController, getproduct, getoneproduct,updateoneproduct, deleteproduct} = require('../controller/productcontroller')

// register controller new
const {register, login, logout} = require('../controller/usecontroller')
const {protect} = require('../middleware/authMiddleware')
const sendMail = require('../email-template/mail')


const router = express.Router()

//im calling the function to run in the route always leave comment
router.post('/about', aboutController)      
router.get('/register',regController)
router.get('/users',userController)
router.get('/fetch',protect, getusers)
router.get('/getsingleuser/:id',getsingleusers)
router.patch('/update/:id', updateallusers)
router.delete('/delete/:id', deleteoneuser)
router.get('/product', productController)
router.get('/findproduct', getproduct)
router.get('/findoneproduct/:id', getoneproduct)
router.patch('/updateproduct/:id', updateoneproduct)
router.delete('/deletep/:id', deleteproduct)

//new route function
router.post('/registerUser', register)
router.post('/loginUser', login)
router.get('/logoutuser/:token', logout ) //use to protect page
router.get('/sendmail', sendMail)




 





module.exports= router

//new way to export file
// module.exports = {
//     regController, aboutController
// }