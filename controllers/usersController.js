const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Defining methods for the booksController
module.exports = {
    getUser: async (req, res) => {

        const user = await db.User.findOne({ _id: req.user })
        res.json(user);
    },
    signUp: async (req, res) => {
        req.body.email = req.body.email.toLowerCase();

        //has the password
        const password = await bcrypt.hash(req.body.password, 10);

        //create user in database
        const user = await db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: password,
        });

        //create cookie for user 
        const token = jwt.sign({ _id: user._id }, process.env.APP_SECRET);

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
        });

        res.json(user);
    },
    signIn: async (req, res) => {

        //check if there is a user with that email
        const user = await db.User.findOne({ email: req.body.email });


        //if there is no user with that email then send back a response
        if (!user) {
            res.json({
                error: 1,
                msg: `No such user found for email ${req.body.email}`
            })
        }

        //check if their password is correct
        const valid = await bcrypt.compare(req.body.password, user.password);

        if (!valid) {
            res.json({
                error: 1,
                msg: "Invalid Password!"
            })
        }

        //if the password is good, generate the jwt
        const token = jwt.sign({ _id: user._id }, process.env.APP_SECRET);
        //set the cookie with the token
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
        });
        res.json(user);
    },
    signOut: (req, res) => {
        console.log("logging out");
        res.clearCookie("token");
        res.json("Signed Out!");
    }
};
