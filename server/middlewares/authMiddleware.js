const jwt = require('jsonwebtoken')
const User = require('../models/users')
const dotenv = require('dotenv');


const asyncHandler = require('express-async-handler')

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id)

            next()
        }
        catch (err) {
            res.status(401);
            throw new Error("Not authorized, token failed")
        }
    }

    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token was found")
    }
})

module.exports = { protect }