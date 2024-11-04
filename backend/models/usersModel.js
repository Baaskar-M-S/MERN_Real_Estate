import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    usertype: {
      type: String,
      enum: ["Owner", "Builder", "Promoter", "Agent/Agency"],
      required: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name should have at least 2 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "Email format is invalid"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password should be at least 6 characters"],
    },
    phonenumber: {
      type: String,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },
    profilePicture: {
      type: String,
      default: "https://example.com/default-profile.png",
      match: [
        /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
        "Invalid URL format for profile picture",
      ],
    },
    companyName: {
      type: String,
      trim: true,
      minlength: [2, "Company name should have at least 2 characters"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Create an index on email for faster querying
// userSchema.index({ email: 1 });

const User = mongoose.model("User", userSchema);

export default User;
