

const regController = (req, res) => {
res.status(200).json('register page')
}

const aboutController = (req,res)=> {
    res.status(200).json('about page')
    console.log(req.body);

}

//module.exports =regController
//module.exports = AboutController

module.exports = {
regController, aboutController

}

