const { User } = require("../db");
const jwt = require('jsonwebtoken')

async function verifyToken(req,res, next){
  try{ 
    const token= req.headers["x-access-token"]
   console.log(token)
   if(!token)return res.status(403).json({message:'no token'})

   const decoded = jwt.verify(token, 'SECRET_KEY')
   req.userId= decoded.id
   const user = await User.findOne({where:{
    id:decoded.id
   }
  })
   if(!user) return res.status(404).json({message:'no user found'})
   next()}
   catch(error){
    console.log(error)
    return res.status(401).json({message:'Unauthorized'})
   }
}

async function isProf(req,res, next){
  const user = await User.findByPk(req.userId)
  if(user.isProf){ 
    req.isProfe=true
    req.user = user
    next()
  }else{
    req.isProf= false
    req.user= user
   next()
  }

  console.log(user.isProf)

}

module.exports={
    verifyToken,
    isProf
}

/* {
    "name":"user 7",
  "date":"123456",
  "links":"false"
  

    
  }
  
{
  "userName":"user 7",
"password":"123456",
"isProf":false

  
}
  
  */