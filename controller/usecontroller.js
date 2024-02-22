const User = require("../models/userModel")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const revokedtokens = []

const generatetoken = (id) => {
    // id jwtsecret expiration date
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:"1d"})
}

// gmail password for 2 factor authentication
//twbe gefw kayz knba  

// register function
const register = async(req,res) => {
    try {
        const {name,email,password}=req.body
    //console.log(name, email, password);
    //validation
    if(!name || !email || !password){
        throw new Error('please fill in the required fields')
    }

    if(password.length < 8){
       throw new Error('password must be more than 8 xxx')
    }

    ///check if user exist
    const userExist = await  User.findOne({email})
    if (userExist){
        throw new Error('email already exist try another user')
    }
    
    //hash password or encrypt password
     const salt = await bcrypt.genSalt(10) // generate salt
    const harshedpassword = await bcrypt.hash(password,salt)
    // console.log(harshedpassword);


    ///creating and saving to db
    const user = await User.create({
        name:name,
        email:email,
        password: harshedpassword
    })

    const token = generatetoken(user._id)
    //send HTTP ONLY cookies
res.cookie('token', token ,{
path: '/',
httpOnly: true,
expires: new Date(Date.now() + 1000 * 86400), //1day
sameSite: 'none',
secure: true
})


   // regenerate token for user

   
    if(user){
        const{_id,name,email,phone}=user
        res.status(201).json({
            _id,name,email,password,phone,token
        })
    }else{
        throw new Error('invalid user')
    }

    } catch (error) {
       console.log(error);
       return res.status(400).json({message: error.message}); 
    }
};




// login function
const login = async (req, res) => {
    //res.send('login page')
    const {email, password} = req.body  //what to use to login and retrieve

    //validation
    if(!email || !password){
        res.status(400).json('please fill in the required fields')
    }

    // validate password
    if(password.lenght < 8){
        res.status(400).json('password must be more than 8 xxx')
    }

///check if user exist
const userExist = await  User.findOne({email})
//validation
if (!userExist){
    res.status(400).json('email does not exist ')
}


// if user does not exit


//regenerate token for login
const token = generatetoken(userExist.id)
    if(userExist){
        const{_id,name,email,phone}=userExist
        res.status(200).json({
            _id,name,email,password,phone,token
        })
    }else{
        res.status(400).json('invalid user')
    }

 }

const logout = (req, res) => {
    //extract the token from the header, body or query params
    const token = req.headers.authorization || req.body.token || req.query.token

    //check if no token is found
    if (!token) {
        return res.status(400).json({message: 'no token found in the request'});

    }

    // check if the token is in the revokedtoken list
    if(revokedtokens.includes(token)) {
        return res.status(401).json({message: 'token has already been revoked. logout failed. '});
    }

    // add the token to the revokedtokens list
    revokedtokens.push(token);

    res.status(200).json({message: 'logout successfull.'})
}



module.exports = {
    register, login, logout
}
