const mongoose = require('mongoose');
const colors = require('colors');
const keys = require('../config/keys');



function start() {
    mongoose.connect(keys.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        .then(function () {
            console.log('Мы подключились к БД приложения!!!'.cyan.underline);
        })
        .catch(function (error) {
            console.log(error.red.underline.bold);
        });

}


module.exports = { start }