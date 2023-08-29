const router = require('express').Router();
const artistController = require('../controllers/artistController');

router.get('/getArtist/:id', artistController.getSpecificArtist);

router.use((req, res, next) => {
  if (req.session.user) next();
  else
    res.status(401).send({
      status: 'failed',
      message: 'User anauthorised',
    });
});

router.patch('/editArtistAbout/:id', artistController.editArtistAbout);
router.patch('/editArtistInsta/:id', artistController.editArtistInsta);
router.patch('/editArtistEmail/:id', artistController.editArtistEmail);

module.exports = router;
