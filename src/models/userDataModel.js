const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDataSchema = new Schema({
  email: {
    type: mongoose.SchemaType.String,
    required: true,
    unique: true,
  },
  email_verified: {
    type: mongoose.SchemaType.Boolean,
    required: true,
  },
  name: {
    type: mongoose.SchemaType.String,
    required: true,
  },
  picture: {
    type: mongoose.SchemaType.String,
    required: true,
  },
  crac_member: {
    type: mongoose.SchemaType.Boolean,
    required: true,
    default: false,
  },
  admin: {
    type: mongoose.SchemaType.Boolean,
    required: true,
    default: false,
  },
  id: {
    type: mongoose.SchemaType.String,
    required: true,
    unique: true,
  },
});

const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;
