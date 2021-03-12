require('dotenv').config();

const bcrypt        = require('bcrypt');
const jwt           = require('jsonwebtoken');
const User          = require('../model/User');
const handelErrors  = require('../helpers/handelErrors');

exports.secret = (req,res) => {
    const token = req.headers.token;
    jwt.verify(token, process.env.SECRET_TOKEN, (err, decode) => {
        if(err) {
            return res.status(401).json({
                error: "Not Authorized"
            })
        }
        return res.status(200).json({
            message: "Authorized"
        })
    })
};

exports.signup = async (req,res) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.create({username, email, password})
        return res.status(201).json({user});
    } catch (error) {
        console.log(error);
        const errors = handelErrors(error);
        res.status(400).json({errors});
    }
};

exports.login = async (req,res) => {
    const { email, password } = req.body;
    const authUser = await User.findOne({email});

    if(!authUser) return res.status(401).json({
        title: 'Authentication Error',
        error: 'Invalid Credentials'
    });

    const authPassword = await bcrypt.compare(password, authUser.password);

    if(!authPassword) return res.status(401).json({
        title: 'Authentication Error',
        error: 'Invalid Credentials'
    });

    const authToken = jwt.sign({ userId: authUser._id}, process.env.SECRET_TOKEN);
    return res.status(200).json({
        title: "Login Success",
        token: authToken
    });
};