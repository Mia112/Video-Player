const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5
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


module.exports = User = mongoose.model('user', UserSchema);