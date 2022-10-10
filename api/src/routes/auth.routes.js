const { Router } = require('express');
const { register,  loginProf, loginStudent, role } = require('../controllers/auth.controllers');
const { verifyToken,isProf,  } = require('../middlewares');
const {userAlreadyCreated, } = require('../middlewares/verifyRegister')
const router = Router()


router.post('/register', userAlreadyCreated,register)
router.post('/login' , loginProf)
router.post('/login/student', loginStudent)
router.get('/role', verifyToken,isProf, role)

module.exports =router;