const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
  email: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  email_verified: {
    type: mongoose.SchemaTypes.Boolean,
    required: true,
  },
  name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  picture: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  crac_member: {
    type: mongoose.SchemaTypes.Boolean,
    required: true,
    default: false,
  },
  admin: {
    type: mongoose.SchemaTypes.Boolean,
    required: true,
    default: false,
  },
  id: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
});

const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;
