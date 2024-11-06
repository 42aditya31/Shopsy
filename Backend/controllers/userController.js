const User = require('../models/user');

exports.getDashboardPage = async (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/auth/login');
    }
    try {
        const user = await User.findById(req.session.userId);
        res.render('dashboard', { user });
    } catch (error) {
        console.log(error);
        res.redirect('/auth/login');
    }
};