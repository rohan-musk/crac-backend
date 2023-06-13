const router = require('express').Router();
const authController = require('../controllers/authController');

router.get('/googlelogin', authController.googleLogin);

module.exports = router;
