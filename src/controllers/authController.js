const { response } = require('express');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.googleLogin = async (req, res, next) => {
  const { tokenId } = req.query;
  const ticket = await client.verifyIdToken({
    idToken: tokenId,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const { email, email_verified, name, picture } = ticket.getPayload();
  const admin = 'true';
  const crac_member = 'true';
  const userData = { email, email_verified, name, picture, crac_member, admin };
  console.log(req.session);
  if (email_verified) {
    if (req.session.user) {
      return res.send(req.session.user);
    } else {
      req.session.user = {
        userData,
      };
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
