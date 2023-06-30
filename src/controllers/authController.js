const { response } = require('express');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const UserData = require('../models/userDataModel');
const idGenerator = require('../utils/idGenerator');

exports.googleLogin = async (req, res, next) => {
  const { tokenId } = req.query;
  const ticket = await client.verifyIdToken({
    idToken: tokenId,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const { email, email_verified, name, picture } = ticket.getPayload();
  const admin = true;
  const crac_member = true;
  let id = '';

  let idGenerated = false;
  while (!idGenerated) {
    id = idGenerator();
    idGenerated = !(await UserData.exists({ id: id }));
  }

  if (email_verified) {
    if (req.session.user) {
      return res.send(req.session.user);
    } else {
      const userData = await UserData.findOne({ $or: [{ email }, { id }] });
      if (userData) {
        req.session.user = {
          userData,
        };
      } else {
        const userData = await UserData.create({
          email,
          email_verified,
          name,
          picture,
          crac_member,
          admin,
          id,
        });
        req.session.user = {
          userData,
        };
      }
      return res.send(req.session);
    }
    // return res.status(200).send({
    //   status: 'success',
    //   data: { userData },
    // });
  }
  return res.status(401).send({
    status: 'failed',
    data: { message: 'User not authorised' },
  });
};

exports.isLoggedIn = async (req, res, next) => {
  if (req.session.user) {
    return res.status(200).send({
      status: 'success',
      data: req.session.user,
    });
  }
  return res.status(401).send({
    status: 'failed',
    data: { message: 'User not authorised' },
  });
};
