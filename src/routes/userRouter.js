const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/getUsers', userController.getUsers);
router.get('/getUsers/:id',userController.getSpecificUser);

module.exports = router;
