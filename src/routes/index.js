var router = require('express').Router();

router.use('/contactdetails', require('./contactDetialsRoutes'));

module.exports = router;
