const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  videoId: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },


});

const Video = mongoose.model("Video", VideoSchema);

module.exports = Video;

