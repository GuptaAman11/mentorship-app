const mongoose = require("mongoose");
const mentorSchema = new mongoose.Schema({
  name: { type: String},
 email: { type: String, lowercase: true, trim: true, required: true, unique: true },

  password: { type: String  },
  experienceLevel: [{ type: String }],
  areaofinterest: { type: String },
  bio: { type: String, length: 1024 },
  availability: [
    {
      dayOfWeek: { type: Number, min: 0, max: 6 }, // 0 - Sunday , 1 - Monday ... etc
      fromTime: { type: Date, required: true },
      toTime: { type: Date, required: true },
    },
  ],
  
  feedback: [
    {
      user: { type: mongoose.Types.ObjectId, ref: "User" },
      rating: { type: Number, min: 0, max: 5 },
      comment: { type: String, length: 300 },
    },
  ],
  noofmantee: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  age: { type: Number },
  gender: { type: String, enum: ["Male", "Female"] },
//   review: [
//     {
//       user: { type: mongoose.Types.ObjectId, ref: "User" },
//       review: { type: String, required: true },
//       rating: { type: Number, min: 1, max: 5 },
//     },
//   ],
});
const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor ;