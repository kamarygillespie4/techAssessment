const { Schema, model } = require("mongoose");
//require thought model
const landHoldingSchema = require("./landHolding");

// Schema to create owner model
const ownerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
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
    //Array of _id values referencing the Land Holding model
    landHoldings: [
      {
        type: Schema.Types.ObjectId,
        ref: "LandHolding",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      // getters: true,
    },
    id: false,
  }
);

ownerSchema.virtual("landHoldingCount").get(function () {
  return this.landHoldings.length;
  //the length will be the number of objects in the friends array. The objects are land holdings
});

const Owner = model("Owner", ownerSchema);

module.exports = Owner;
