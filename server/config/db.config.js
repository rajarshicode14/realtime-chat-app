const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        })

        console.log(`MongoDB Connected to ${conn.connection.host}`)
    }
    catch (err) {
        console.error(err)
    }
}

module.exports = connectDB