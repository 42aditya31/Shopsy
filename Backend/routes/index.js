const express = require('express');
const router = express.Router();

const homeRoutes = require('./home');
const authRoutes = require('./auth');
const userRoutes = require('./user');

router.use('/', homeRoutes);
router.use('/auth', authRoutes);
router.use('/user', userRoutes);

module.exports = router;