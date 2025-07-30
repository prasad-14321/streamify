const Subscription = require('../models/Subscription');

exports.subscribeUser = async (req, res) => {
  const { plan } = req.body;
  const subscription = await Subscription.create({
    user: req.user.id,
    plan,
    validTill: new Date(Date.now() + 30*24*60*60*1000) // 30 days
  });
  res.json(subscription);
};
