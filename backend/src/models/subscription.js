const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  type: { type: String, required: true }, // Traditional or Intersight
  contactNumber: { type: String, required: true },
  serverType: { type: String, required: true },
  serverName: { type: String, required: true },
  port: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  subscriptionId: { type: String },
  devices: [{ type: String }],
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
