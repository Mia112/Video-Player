const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const VideoSchema = new Schema({
  _id: String,
  videoId: {
    type: String,
    required: true
  }
  
    

});

const Video = mongoose.model("Video", VideoSchema);

module.exports = Video;

