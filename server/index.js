const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const asyncHandler = require('express-async-handler')
dotenv.config()

const connectDB = require('./config/db.config.js')

const app = express()
connectDB()
app.use(express.json())

const data = require('./data');
const User = require('./models/users.js');
const Chat = require('./models/chats.js');

const generateToken = require('./config/generateToken.js');
const { protect } = require('./middlewares/authMiddleware.js');

app.use(cors({
    origin: ['http://localhost:5173']
}));

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('Server listening on PORT:', PORT);
})

app.post('/login', asyncHandler(async (req, res) => {
    const { name, email, pic, userName } = req.body;

    const userExists = await User.findOne({ email: email });

    if (userExists) {
        res.json({
            ...userExists.toObject(),
            token: generateToken(userExists._id)
        })
    }
    else {
        const user = await User.create({
            name, email, pic, userName
        })

        if (user) {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                pic: user.pic,
                userName: user.userName,
                token: generateToken(user._id)
            })
        }
        else {
            res.send("Failed to create user")
        }
    }
}))

// Get all users that matches either name, email or username
app.get('/allUsers', asyncHandler(protect), asyncHandler(async (req, res) => {
    const keyword = req.query.search ? {
        $or: [
            { userName: { $regex: req.query.search } },
            { userName: { $regex: req.query.search } },
            { email: { $regex: req.query.search } }
        ]
    } : {}

    const users = await User.find(keyword).find({ _id: { $ne: req.user._id } })
    res.send(users)

}))


// Create or Accesss a one on one chat
app.post('/chat', asyncHandler(protect), asyncHandler(async (req, res) => {
    const { userId } = req.body;

    var isChat = await Chat.find({
        isGroupChat: false,
        $and: [
            { users: { $elemMatch: { $eq: req.user._id } } },
            { users: { $elemMatch: { $eq: userId } } }
        ]
    }).populate("users").populate("latestMessage")

    isChat = await User.populate(isChat, {
        path: 'latestMessage.sender',
        select: 'name, pic, email, userName'
    });

    if (isChat.length > 0) {
        res.send(isChat[0])
    }
    else {
        var chatData = {
            chatName: 'sender',
            isGroupChat: false,
            users: [req.user._id, userId]
        }
    }

    try {
        const createdChat = await Chat.create(chatData)
        const fullChat = await Chat.findOne({ _id: createdChat._id }).populate("users")
        res.status(200).send(fullChat)

    } catch (error) {
        res.status(400)
        throw new Error(error.message)
    }

}))


// Fetch chats for a user
app.get('/chat', asyncHandler(protect), asyncHandler(async (req, res) => {
    try {
        var results = await Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
            .populate("users")
            .populate("groupAdmin")
            .populate("latestMessage")
            .sort({ updatedAt: -1 })

        results = await User.populate(results, {
            path: 'latestMessage.sender',
            select: 'name, pic, email, userName'
        })

        res.status(200).send(results)
    } catch (error) {
        res.status(400)
        throw new Error(error.message)
    }
}))


// Create group chat
app.post('/chat/group', asyncHandler(protect), asyncHandler(async (req, res) => {
    var users = JSON.parse(req.body.users)

    users.push(req.user)

    try {
        const groupChat = await Chat.create({
            chatName: req.body.name,
            users: users,
            isGroupChat: true,
            groupAdmin: req.user
        })
        const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
            .populate("users")
            .populate("groupAdmin")

        res.status(200).send(fullGroupChat)


    } catch (error) {
        res.status(400)
        throw new Error(error.message)
    }
}))


//  Rename group chat
app.put('/chat/renamegroup', asyncHandler(protect), asyncHandler(async (req, res) => {
    const { chatId, chatName } = req.body;

    const updatedChat = await Chat.findByIdAndUpdate(
        chatId,
        {
            chatName
        },
        {
            new: true
        }
    )
        .populate("users")
        .populate("groupAdmin")

    res.json(updatedChat)
}))


//  Add members to group
app.put('/chat/group/addmembers', asyncHandler(protect), asyncHandler(async (req, res) => {
    const { chatId, userId } = req.body;

    const added = await Chat.findByIdAndUpdate(
        chatId,
        {
            $addToSet: { users: userId }
        },
        {
            new: true,
        }
    )
        .populate("users")
        .populate("groupAdmin")

    res.status(200).json(added);
}))


//  Remove members from group
app.put('/chat/group/removemembers', asyncHandler(protect), asyncHandler(async (req, res) => {
    const { chatId, userId } = req.body;

    const removed = await Chat.findByIdAndUpdate(
        chatId,
        {
            $pull: { users: userId }
        },
        {
            new: true,
        }
    )
        .populate("users")
        .populate("groupAdmin")

    res.status(200).json(removed);
}))


