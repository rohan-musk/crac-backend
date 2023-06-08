const router = require('express').Router();
const contactDetailsController = require('../controllers/contactDetailsController');

router.get('/', contactDetailsController.getContactDetails);

module.exports = router;
