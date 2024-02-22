const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const protect = async (req,res,next) =>{ // use to protect page
    try {
        //console.log(req.cookies);
        const token = req.cookies.token;
        if(!token){
res.status(401).json({message:'Not authorized, please login'})
//throw new Error('Not authorized, please login')
        }
        // console.log(error.message)
        const verified = jwt.verify(token,process.env.JWT_SECRET)

        const user = await User.findById(verified.id);
        if(!user){
            //res.status(401).json({message: 'User not found'});
            throw new Error('User not found')
        }
        req.user = user
        next()
    } catch (error) {
      res.status(401).json(error.message)
      // throw new Error ('Not authorized please login')  
    }
}

module.exports = {protect}



