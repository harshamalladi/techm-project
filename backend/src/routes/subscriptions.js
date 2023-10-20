const express = require('express');
const router = express.Router();
const Subscription = require('../models/subscription');
const subscription = require('../models/subscription');

// Create a new subscription
router.post('/add-subscription', async (req, res) => {
  try {
    const subscriptionData = req.body;

    // Create a new subscription document using the Mongoose model
    const newSubscription = new Subscription(subscriptionData);

    // Save the new subscription to the database
    await newSubscription.save();

    // Send a response with the newly created subscription
    res.status(201).json(newSubscription);
  } catch (error) {
    // Handle errors, sending a 500 Internal Server Error response
    res.status(500).json({ error: error.message });
  }
});

router.get('/',async(req,res)=>{
  try {
    const {username} = req.query;
    const data = await subscription.find({username:username});
    res.status(200).json({data})
    
  } catch (error) {
    res.status(500).json({error:error})
  }
});


router.get('/admin',async(req,res)=>{
  try {
    const data = await subscription.find();
    res.status(200).json({data})
    
  } catch (error) {
    res.status(500).json({error:error})
  }
})


module.exports = router;
