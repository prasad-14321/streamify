const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  plan: { type: String, enum: ['Basic', 'Premium'], default: 'Basic' },
  validTill: Date
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
