const bcrypt = require('bcryptjs');
const errorHandler = require('../Utils/errorHendler');
const User = require('../models/User.js')



// @desc Получаем профиль пользователя
// @route /api/user/profile
module.exports.getUserProfile = async function(req, res) {

    const user = {
        name: 'Ivan',
        age: 33
    }

    res.status(200).json(user);
};






// @desc Регистрация пользователя
// @route /api/user/registration
module.exports.register = async function (req, res) {

    // Делаем проверку на наличие пользователя в БД
    const canditate = await User.findOne({
        email: req.body.email
    });

    if (canditate) {
        res.status(409).json({
            message: "Такой Email уже существует в системе. Проверьте правильность введенных данных!"
        });
    } else {
        // Шифрование пароля пользователя
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;


        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt),
            name: req.body.name,
            images: []
        });


        const userResponse = {
            name: user.name,
            email: user.email,
            images: user.images,
            _id: user._id,
        }

        try {
            await user.save();
            res.status(201).json(userResponse);
        } catch (error) {
            errorHandler(res, error);
        }
    }


};

