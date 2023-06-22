const router = require('express').Router();
const authController = require('../controllers/authController');

//for any protected route- use these lines of code
// router.use((req, res, next) => {
//   if (req.session.user) next();
//   else res.send(401);
// });

router.get('/googlelogin', authController.googleLogin);
router.get('/isloggedin', authController.isLoggedIn);

module.exports = router;
