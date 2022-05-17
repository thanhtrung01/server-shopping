const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    nameCart: {
      type: String,
      required: true,
      unique: true,
      // trim: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    slugCart: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamp: true,
  },
);

module.exports = mongoose.model('Cart', CartSchema);
