const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    browser: {
      type: String,
    },
    // socketId: {
    //   type: String,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
