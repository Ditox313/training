const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const DB_LINK = require('./config/dbLink');




// Routes
const userRoutes = require('./routes/user.js');


// Запускаем приложение
const app = express();
DB_LINK.start();





app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/user', userRoutes);
app.use('/uploads/cars', express.static('uploads/cars'));







// Экспортируем наружу
module.exports = app;