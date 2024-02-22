
// user controller function
const mongoose  = require('mongoose')
const User = require('../models/userModel')

//function to create a user
const userController = async (req, res) => {
    try {
        const {name, phone} = req.body
        if(!name || !phone){
            res.status(400).json('kindly input all field')
        } else{
            const createdUser = await User.create({name, phone})
            res.status(201).json(createdUser)
            console.log('user successfully created');
        }
    }catch (error){
        res.status(500).json(error)
        console.log(error);
    }

    
    //retrieve data

}

    // User.find({}, (err, data) => {
    //     if (err) {
    //         console.error(err);
    //     }else {
    //         console.log(data);
    //     }

    //     mongoose.connection.close();
    // })

// function to find user
    const getusers = async (req,res)=> {
        try {
           const users =  await User.find({})
           res.status(200).json(users)
        } catch (error) {
            console.log(error.msg)
        }
    
    }

// find one users
    const getsingleusers = async (req,res)=> {
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

const updateallusers = async (req,res)=> {
    const id = req.params.id 
    console.log(id)
     try {
        const updates =  await User.findByIdAndUpdate(id,req.body)
       if(!updates){
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
 
 // function to delete one user
 const deleteoneuser = async (req,res)=> {
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
         // console.log(delete)
       }
     } catch (error) {
         res.status(500).json(error)
         // console.log(error)
     }
 }
 

    
module.exports ={ 
    userController, getusers,getsingleusers, updateallusers, deleteoneuser
 }