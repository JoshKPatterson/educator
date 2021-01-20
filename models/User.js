const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const SectionSchema = new Schema({
  time_spent: {
    type: Number,
    default: 0,
  },
  average_grade: {
    type: Number,
    default: 0,
  },
  activities_attempted: {
    type: Number,
    default: 0,
  },
});

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
  stats: {
    type: [
      {
        global: {
          time_logged_in: 0,
        },
        sections: {
          type: [
            {
              math: { type: SectionSchema },
              geography: { type: SectionSchema },
            },
          ],
        },
      },
    ],
  },
});

module.exports = User = mongoose.model("user", UserSchema);
