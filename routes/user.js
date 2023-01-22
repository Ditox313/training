const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.js');



// Роут на getUserProfile
router.get('/profile', controller.getUserProfile);





module.exports = router;