const mongoose = require('mongoose')

const reactSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default:Date.now
    }

})

module.exports = reactSchema
