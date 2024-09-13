import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    Image: {
      type: String,
      required:true,
    
    },
    FirstName: {
      type: String,
      required: [true, "First Name is required"],
      trim: true,
      lowercase: true,
    },
    LastName: {
      type: String,
      required: [true, "Last Name is required"],
      trim: true,
      lowercase: true,
    },
    MiddleName: {
      type: String,
      required: [true, "Middle Name is required"],
      trim: true,
      lowercase: true,
    },
    Email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    PhoneNumber: {
      type: Number,
      required: [true, "Phone Number is required"],
      trim: true,
      lowercase: true,
    },
    DateOfBirth: {
      type: Date,
      required: [true, "Date of Birth is required"],
    },
    Gender: {
      type: String,
      required: [true, "Gender is required"],
      trim: true,
    },
    CityInIndia: {
      type: String,
      required: true,
      trim: true,
    },
    CityInCanada: {
      type: String,
      required: true,
      trim: true,
    },
    Address: {
      type: String,
      required: true,
      trim: true,
    },
    PrimarySeva: {
      type: String,
    },
    SecondarySeva: {
      type: String,
    },
    Mis: {
      type: String,
    },
    Satsangi: {
      type: String,
    },
    Skills: [
      {
        type: String,
      },
    ],
    Status: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export { User };
