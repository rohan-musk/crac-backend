const ArtistData = require('../models/artistDataModel');

exports.getSpecificArtist = async (req, res, next) => {
  const artist = await ArtistData.find({ id: req.params.id });
  if (artist) {
    return res.status(200).send({ artist });
  } else
    return res.status(400).send({
      status: 'failed',
      data: { message: 'No artist data found' },
    });
};
exports.editArtistAbout = async (req, res, next) => {};
exports.editArtistInsta = async (req, res, next) => {};
exports.editArtistEmail = async (req, res, next) => {};
