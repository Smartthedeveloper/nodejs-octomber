// user product controller function
const mongoose  = require('mongoose')
const User = require('../models/productmodel')


const productController = async (req, res) => {
    
    try {
        const {productname, description,price,newprice,rating,image} = req.body
       
        if(!productname|| !description || !price || !newprice ){
            res.status(400).json('kindly input all field')
        } else{
            const createdUser = await User.create({productname,description, price, newprice, rating, image})
            res.status(201).json(createdUser)
            console.log('user successfully created');
        }
    }catch (error){
        res.status(500).json(error)
        console.log(error);
    }
}

//function to find product

const getproduct = async (req,res)=> {
    try {
       const users =  await User.find({})
       res.status(200).json(users)
    } catch (error) {
        console.log(error.msg)
    }

}

// find one find one product
const getoneproduct = async (req,res)=> {
   const usersid = req.params.id 
   console.log(usersid)
    try {
       const users =  await User.findById(usersid)
      if(!users){
        res.status(404).json('user not found')
        console.log('error user not found');
      }
      else{
        res.status(200).json(users)
        // console.log(users)
      }
    } catch (error) {
        res.status(500).json(error)
        // console.log(error)
    }
}

//update all users 
// update end point

const updateoneproduct = async (req,res)=> {
const id = req.params.id 
console.log(id)
 try {
  //find the item by id  and update it properties
    const update =  await User.findByIdAndUpdate(id,req.body)
   if(!update){
     res.status(404).json('user not found')
     console.log('error user not found');
   }
   else{
     res.status(200).json('user has been updated')
     
     // console.log(update)
   }
 } catch (error) {
     res.status(500).json(error)
     // console.log(error)
 }
}

// // function to delete one user
const deleteproduct = async (req,res)=> {
const id = req.params.id 
console.log(id)
 try {
    const delet =  await User.findByIdAndDelete(id)
   if(!delet){
     res.status(404).json('user not found')
     console.log('error user not found');
   }
   else{
     res.status(200).json('user have successfully deleded')
      console.log(delet)
   }
 } catch (error) {
     res.status(500).json(error)
     // console.log(error)
 }
}



 module.exports ={ 
 productController,getproduct,getoneproduct, updateoneproduct, deleteproduct
 }