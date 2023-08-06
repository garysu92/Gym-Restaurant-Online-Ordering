const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://garysu92:garysu92@cluster0.vfzjujj.mongodb.net/', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db