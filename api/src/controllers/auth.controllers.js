const { User } = require("../db");
const { encryptPassword, compare } = require("../helpers/encrypt");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  try {
    const { userName, password, isProf } = req.body;
    console.log(userName);
    /* const result = compare(password, passwordHash) */
    const passwordHash = await encryptPassword(password);

    let newUser = await User.create({
      userName,
      password: passwordHash,
      isProf,
    });
   /*  const token = jwt.sign({ id: newUser.id }, "SECRET_KEY", {
      expiresIn: 86400,
    }); */
    console.log(passwordHash);
    res.json({message:'registrado con éxito'});
  } catch (err) {
    console.log(err);
    res.json({ message: "hubo un error", err });
  }
}
async function loginProf(req, res) {
  const { userName, password } = req.body;

  try {
    let userFound = await User.findOne({ where:{userName} });

    console.log(userFound,'aqui??');
    if (!userFound) {
      res.status(400).json({message:"usuario no encontrado"});
    } else {
      const matchPassword = await compare(userFound.password, password);
      if (!matchPassword) {
        return res
          .status(401)
          .json({ token: "null", message: "contraseña incorrecta" });
      } else {
        if (userFound.isProf) {
            
          const token = jwt.sign({ id: userFound.id }, "SECRET_KEY", {
            expiresIn: 86400,
          });

          return res.json({ token, isProf: userFound.isProf });
        } else {
          return res
            .status(401)
            .json({
              message:
                "No tienes una cuenta como profesor, inicia como estudiante",
              isProf: userFound.isProf,
            });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}

async function loginStudent(req, res) {
    const { userName, password } = req.body;
  
    try {
      let userFound = await User.findOne({ where:{userName} });
  
      console.log(userFound,'aqui??');
      if (!userFound) {
        res.status(400).json({message:"usuario no encontrado"});
      } else {
        const matchPassword = await compare(userFound.password, password);
        if (!matchPassword) {
          return res
            .status(401)
            .json({ token: "null", message: "contraseña incorrecta" });
        } else {
          if (!userFound.isProf) {
              
            const token = jwt.sign({ id: userFound.id }, "SECRET_KEY", {
              expiresIn: 86400,
            });
  
            return res.json({ token, isProf: userFound.isProf });
          } else {
            return res
              .status(401)
              .json({
                message:
                  "No tienes una cuenta como estudiante, inicia como Profesor",
                isProf: userFound.isProf,
              });
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

function role(req, res){
  try{
  if(req.isProfe===true){
    res.json({'isProf':true, userData:req.user.userName})
  }else{
    res.json({'isProf':false, userData:req.user.userName})
  }
  }catch(err){
    res.send(err)
  }

 }

module.exports = {
  register,
  loginProf,
  loginStudent, 
  role
};
