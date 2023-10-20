const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  type: { type: String,  }, // Traditional or Intersight
  contactNumber: { type: String, },
  serverType: { type: String, },
  serverName: { type: String,  },
  port: { type: Number, },
  username: { type: String, },
  password: { type: String,  },
  subscriptionId: { type: String },
  devices: [{ type: String }],
  subscriptionType:{type:String}
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
