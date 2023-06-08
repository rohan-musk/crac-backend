const contactData = {
  insta: '@crac_bitspilani',
  mail: 'f20201798@bits.pilani-bits.ac.in',
};

exports.getContactDetails = async (req, res, next) => {
  return res.status(200).send({
    status: 'success',
    data: { contactData },
  });
};
