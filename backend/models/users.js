const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 6
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
}, {
    timestamps: true,
});

module.exports = User = mongoose.model('User', userSchema);