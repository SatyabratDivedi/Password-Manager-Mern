const mongoose = require("mongoose");

const passwordSchema = new mongoose.Schema({
  website: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  whichUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});
const passwordModel = mongoose.model("passwordData", passwordSchema);
module.exports = passwordModel;
