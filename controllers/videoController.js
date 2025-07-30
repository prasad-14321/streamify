const Video = require('../models/Video');

exports.uploadVideo = async (req, res) => {
  const { title, description, genre } = req.body;
  const videoUrl = req.file.path;
  const video = await Video.create({
    title, description, genre, videoUrl, uploadedBy: req.user.id
  });
  res.status(201).json(video);
};

exports.getAllVideos = async (req, res) => {
  const videos = await Video.find().populate('uploadedBy', 'name');
  res.json(videos);
};
