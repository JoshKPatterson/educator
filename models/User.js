const mongoose = require("mongoose").set("debug", true);
const Schema = mongoose.Schema;

// Create Schema

const UserSchema = new Schema(
  {
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
      global: {
        time_logged_in: {
          type: Number,
          default: 0,
        },
      },
      sections: {
        math: {
          time_spent: {
            type: Number,
            default: 0,
          },
          average_grade: {
            type: Array,
            default: [],
          },
          activities_attempted: {
            type: Number,
            default: 0,
          },
        },
        geography: {
          time_spent: {
            type: Number,
            default: 0,
          },
          average_grade: {
            type: Array,
            default: [],
          },
          activities_attempted: {
            type: Number,
            default: 0,
          },
        },
      },
    },
  },
  { minimize: false }
);

module.exports = User = mongoose.model("user", UserSchema);
