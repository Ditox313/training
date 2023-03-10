const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');



const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    images: {
        type: Array,
    } ,




}, { timestamps: true, minimize: false, });



// Методы схемы

// Сравниваем введенный пароль и существующий пароль
// userSchema.methods.matchPassword = async function (enteredPassword)
// {
//     return await bcrypt.compare(enteredPassword, this.password)
// }


// // Перед сохранением
// userSchema.pre('save', async function (next){
//     // Если пароль не был изменен, то идем дальше
//     if(!this.isModified('password'))
//     {
//         next();
//     }


//     // Если пароль новый, то шифруем его заново
//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
     
// })



module.exports = mongoose.model('users', userSchema);