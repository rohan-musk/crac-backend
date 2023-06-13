var router = require('express').Router();

router.use('/auth', require('./authRouter'));
router.use('/contactdetails', require('./contactDetailsRouter'));

module.exports = router;
