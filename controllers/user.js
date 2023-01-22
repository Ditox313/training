const bcrypt = require('bcryptjs');
const errorHandler = require('../Utils/errorHendler');



// @desc Получаем профиль пользователя
// @route /api/user/profile
module.exports.getUserProfile = async function(req, res) {

    const user = {
        name: 'Ivan',
        age: 33
    }

    res.status(200).json(user);
};


