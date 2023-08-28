var router = require('express').Router();

router.use('/auth', require('./authRouter'));
router.use('/contactdetails', require('./contactDetailsRouter'));
router.use('/user', require('./userRouter'));
router.use('/artist', require('./artistRouter'));

module.exports = router;
