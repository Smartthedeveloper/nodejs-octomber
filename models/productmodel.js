const mongoose = require('mongoose')

// define schema
const productSchema = mongoose.Schema(
    {
        productname: {
            type: String,
            required: [true, 'please add a productname']
        },
        description:{
            type: String,
            required: [true, 'please add a description']
        },
        price: {
            type:String,
            required: [true, 'please add a price']
        },
        newprice:{
            type:Number,
            
        },
        rating: {
            type: String,
        
        },
        image:{
            type: String,
            
        }
        
    }
) 


// defining model

const User = mongoose.model('product', productSchema)
module.exports = User