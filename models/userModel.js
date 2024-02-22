

const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'please add a name']
        },
        phone:{
            type: String,
            // required: [true, 'please add a phone']
        },
        email: {
            type:String,
            required: [true, 'please add an email'],
            unique:true,
            trim:true,
            // match:[
            //     /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/,
            //     'please enter valid email'
            // ]
        },
        password:{
            type: String,
            required:[true, 'enter a password'],
            minlength: [8, "password must be more than 8 character"]
            //maxlength:[30, "password must not be more thsn 30 character"]

        }
    }
) 




const User = mongoose.model('true', userSchema)
module.exports = User



