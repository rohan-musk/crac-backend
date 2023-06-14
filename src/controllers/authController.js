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
  const userData = { email, email_verified, name, picture };
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
