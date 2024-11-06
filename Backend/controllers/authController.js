const User = require('../models/user');

exports.getLoginPage = (req, res) => {
    res.render('login');
};

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            req.session.userId = user.id;
            res.redirect('/user/dashboard');
        } else {
            res.redirect('/auth/login');
        }
    } catch (error) {
        console.log(error);
        res.redirect('/auth/login');
    }
};

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/');
    });
};

exports.getSignupPage = (req, res) => {
    res.render('signup');
};

exports.postSignup = async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = new User({ username, password });
        await newUser.save();
        req.session.userId = newUser.id;
        res.redirect('/user/dashboard');
    } catch (error) {
        console.log(error);
        res.redirect('/auth/signup');
    }
};