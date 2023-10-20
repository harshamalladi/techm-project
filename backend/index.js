const express = require('express');
const mongoose = require('mongoose');
const subscriptionRoutes = require('./src/routes/subscriptions');
const morgan = require('morgan');
const app = express();
const cors = require("cors"); 

// Connect to MongoDB
mongoose.connect('mongodb+srv://malladiharsha2003:harsha123@cluster0.0bwvj2m.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors('*'));

// Routes
app.get('/',(req,res)=>{
  res.send('Hello World')
});
app.use('/subscriptions', subscriptionRoutes);

const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
