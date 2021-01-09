const mongoose = require('../database/index');

const LocksSchema = new mongoose.Schema({
    mac: {
        type: String,
        unique: true,
        required: true
    },
    uuid: {
        type: String,
        unique: true,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
});

const Locks = mongoose.model('Locks', LocksSchema);

module.exports = Locks;