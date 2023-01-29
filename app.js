const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const DB_LINK = require('./config/dbLink');



// Запускаем приложение
const app = express();

// Регистрируем роуты(Routes) 
const userRoutes = require('./routes/user.js');

// Регистрируем модуль bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Подключаем базу
DB_LINK.start();

// Подключаем модули
app.use(morgan('dev'));
app.use(cors());
app.use('/api/user', userRoutes);
app.use('/uploads', express.static('uploads'));







// Экспортируем наружу
module.exports = app;