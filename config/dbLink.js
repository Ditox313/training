const mongoose = require('mongoose');
const keys = require('../config/keys');


function start() {
    mongoose.connect(keys.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        .then(function () {
            console.log('Мы подключились к БД приложения!!!');
        })
        .catch(function (error) {
            console.log(error);
        });

}


module.exports = { start }