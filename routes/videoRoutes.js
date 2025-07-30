const express = require('express');
const { uploadVideo, getAllVideos } = require('../controllers/videoController');
const auth = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware'); // Using multer
const router = express.Router();

router.post('/upload', auth, upload.single('video'), uploadVideo);
router.get('/', getAllVideos);

module.exports = router;
