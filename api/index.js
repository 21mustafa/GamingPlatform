const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const imageDownloader = require('image-downloader')
const multer = require('multer');
const fs = require('fs');

const UserModel = require('./models/User')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173'
}))

const bcryptSalt = bcrypt.genSaltSync(10)
const jwtSecret = 'fds8gg54iti24ghhrgt8wyr8gwh5hu21'

mongoose.connect('mongodb+srv://blog:HZUz2rVUYVlULLxh@cluster0.rtsrtjf.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req, res) => {
    const {name, email, password} = req.body
    try {
        const user = await UserModel.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        })
        res.json(user)
    } catch(e) {
        console.log(e)
        res.status(422).json(e)
    }
    
})

app.post('/login', async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await UserModel.findOne({email,})

        if (user) {
            const passOk = bcrypt.compareSync(password, user.password)
            if (passOk) {
                jwt.sign({
                    email: user.email,
                    id: user._id
                }, jwtSecret, {}, (err, token) => {
                    if (err) throw err

                    res.cookie('token', token).json({
                        name: user.name,
                        email: user.email
                    })

                })
            } else {
                res.status(401).json('Wrong password')
            }
        } else {
            res.status(404).json('User cannot be found')
        }
    } catch(e) {
        console.log(e)
        res.status(422).json(e)
    }
    
})

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    if(token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err
            const {name, email, _id} = await UserModel.findById(userData.id)
            res.json({name, email, _id})
        })
    } else {
        res.json(null)
    }
})

app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true);
})

app.listen(4000)