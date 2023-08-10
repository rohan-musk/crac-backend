const UserData = require('../models/userDataModel');

exports.getUsers = async (req, res, next) => {
  const allUsers = await UserData.find({});
  return res.status(200).send({ allUsers });
};

exports.getSpecificUser = async (req, res, next) => {
  const user = await UserData.find({id:req.params.id});
  return res.status(200).send({ user });
};
