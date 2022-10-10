const bcrypt = require('bcryptjs')

async function encryptPassword(password){
    const passwordHash = await bcrypt.hash(password, 8)
   return passwordHash
    
}

async function compare(hashedPassword, password){
    const compare= bcrypt.compareSync(password, hashedPassword)
    return compare
}

module.exports={
    encryptPassword, 
    compare
}