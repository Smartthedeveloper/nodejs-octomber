const nodemailer = require('nodemailer')

const sendMail = (req,res) =>{
    //create a transport
    const tranporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SENDER_MAIL,
            pass:process.env.GMAIL_PASS     
        }
    });

    // create a mail option 
    const mailOptions = {
        from:['atanda.ismail.abidemi@gmail.com', ''],
        to:'wajudraji@gmail.com ',
        subject: 'test app',
        text: 'hello this is a text',
        html: `<button style ='background: "#ffff"'>click here</button>`

    }

     //send mail
        tranporter.sendMail(mailOptions, (error, info) =>{
            if(error){
                console.log('error', error.message)
                res.send('error', error.message)
            }
            else{
                console.log('successful email sent');
                res.send('successful email sent')
            }
        })
    }

module.exports = sendMail