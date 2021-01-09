const mongoose = require('../database/index');

const OrganizationSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    instagram: {
        type: String,
        unique: true,
        required: true
    },
    facebook: {
        type: String,
        unique: true,
        required: true
    },
    whatsapp: {
        type: String,
        unique: true,
        required: true
    }
});

const Organization = mongoose.model('Organization', OrganizationSchema);

module.exports = Organization;