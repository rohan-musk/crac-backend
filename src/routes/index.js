var router = require('express').Router();

router.use('/auth', require('./authRouter'));
router.use('/contactdetails', require('./contactDetailsRouter'));
router.use('/user', require('./userRouter'));

module.exports = router;
