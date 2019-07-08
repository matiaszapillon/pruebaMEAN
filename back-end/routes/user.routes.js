const usrCntrl = require('../controllers/user.controller.js');
const express = require('express');

const router = express.Router();

router.get('/', usrCntrl.getUsers );
router.post('/login',usrCntrl.loginUser );
router.post('/registerUser',usrCntrl.createUser );

module.exports = router;