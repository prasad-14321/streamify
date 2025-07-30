const express = require('express');
const { subscribeUser } = require('../controllers/subscriptionController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/subscribe', auth, subscribeUser);

module.exports = router;
