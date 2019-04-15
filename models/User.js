const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: false
  },
  avatar: {
    type: String,
    default:
      "https://sohe.wisc.edu/wordpress/wp-content/uploads/Male-Avatar.png"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
