const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  hobi: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  nomor_telp: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("users", userSchema);
