var router = require('express').Router();

router.use('/contactdetails', require('./contactDetailsRouter'));

module.exports = router;
