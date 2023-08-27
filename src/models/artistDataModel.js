const mongoose = require('mongoose');

const artistDataSchema = new mongoose.Schema({
  id: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  instaID: {
    type: mongoose.SchemaTypes.String,
  },
  mail: {
    type: mongoose.SchemaTypes.String,
  },
});

const ArtistData = mongoose.model('artistdatas', artistDataSchema);

module.exports = ArtistData;
