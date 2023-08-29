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
exports.editArtistAbout = async (req, res, next) => {
  const data = await ArtistData.findOneAndUpdate(
    { id: req.params.id },
    { aboutMe: req.body.aboutme }
  );
  if (data)
    return res
      .status(200)
      .send({
        status: 'success',
        data: { message: 'Succesfully updated about' },
      });
  else
    return res.status(400).send({
      status: 'failed',
      data: {
        message: 'Could not change data cause no artist with that ID exists.',
      },
    });
};
exports.editArtistInsta = async (req, res, next) => {};
exports.editArtistEmail = async (req, res, next) => {};
