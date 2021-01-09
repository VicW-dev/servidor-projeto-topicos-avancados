const mongoose = require('../database/index');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    login: {
        type: String,
        unique: true,
        required: true
    },
    senha: {
        type: String,
        required: true,
        select: false
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;