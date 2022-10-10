const {User} = require("../db");

async function userAlreadyCreated(req, res, next){
    const user = await User.findOne({where:{
        userName:req.body.userName
    }})
    if(user){
        return res.status(400).json({message:'Este nombre de ususario no está disponible'})
    }
    else{
        next()
    }
}

module.exports ={
    userAlreadyCreated,
    
}