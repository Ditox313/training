const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.js');



// Роут на getUserProfile
router.get('/profile', controller.getUserProfile);


// Роут на register
router.post('/registration', controller.register);



module.exports = router;