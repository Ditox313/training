const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const keys = require('./config/keys.js');




// Routes
const userRoutes = require('./routes/user.js');


// Запускаем приложение
const app = express();



// Регистрируем модуль bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Регистрируем Morgan 
app.use(morgan('dev'));

// Регистрируем Cors
app.use(cors());

// Регистрируем роут user
app.use('/api/user', userRoutes);



// Добавляем возможность отдавать с сервера картинки по запросу. (Когда будет запрос к uploads, делай эту папку статической)
app.use('/uploads/cars', express.static('uploads/cars'));

















// Экспортируем наружу
module.exports = app;