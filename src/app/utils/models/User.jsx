//this is the record for user details
const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  bookings: {
    type: mongoose.Types.ObjectId,
    ref: "bookings",
  },
});
const UserModel = mongoose.models.user || mongoose.model("user", userSchema);
export default UserModel;
