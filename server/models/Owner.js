const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    entityType: {
      type: String,
      required: true,
    },
    ownerType: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    numberOfHoldings: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Owner", OwnerSchema);
