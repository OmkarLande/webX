const mongoose = require("mongoose");

// Connection
const connectWithDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/your-db-name");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
// Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        min: 8,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
})

// Model
const User = mongoose.model("User", userSchema);

