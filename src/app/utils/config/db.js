const { default: mongoose } = require("mongoose");

//This is the model for displaying the register details
const DBconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(DBconnected);
  } catch (error) {
    console.log(error);
  }
};
export default DBconnection;
