const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    subTitle: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String,
        minLength: 50
    },
    date: {
        type: Date,
        default: Date.now()
    }
}, {timestamps: true})

module.exports = mongoose.model('Post', PostSchema);