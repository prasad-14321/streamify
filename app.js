const express = require('express');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
dotenv.config();

app.use(express.json());
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/videos', require('./routes/videoRoutes'));
app.use('/api/subscriptions', require('./routes/subscriptionRoutes'));

module.exports = app;
