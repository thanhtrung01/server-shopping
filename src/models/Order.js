const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  cart: {
    type: Object, 
    required: true
  },
  orderItems: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
      qty: Number,
    },
  ],
  serial: {
    type: String,
    required: true,
  },
  paymentId: {
    type: String, 
    required: true
  },
  total: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', OrderSchema);
