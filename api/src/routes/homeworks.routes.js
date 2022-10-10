const { Router } = require('express');
const {createHomework} =require('../controllers/homeworks.controllers')
const { verifyToken, isProf } = require('../middlewares');
const router = Router()

router.post('/', [verifyToken, isProf] ,createHomework)


module.exports =router;