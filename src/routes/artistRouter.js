const router = require('express').Router();
const artistController = require('../controllers/artistController');

router.get('/getArtist/:id', artistController.getSpecificArtist);
router.patch('/editArtistAbout/:id', artistController.editArtistAbout);
router.get('/editArtistInsta/:id', artistController.editArtistInsta);
router.get('/editArtistEmail/:id', artistController.editArtistEmail);

module.exports = router;
