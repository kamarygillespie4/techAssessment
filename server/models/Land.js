const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      //TODO:combination of section name and legal entity
    },
    owner: {
      type: String,
      required: true,
    },
    legalEntity: {
      type: String,
      required: true,
    },
    netAcres: {
      type: String,
      required: true,
    },
    ownerRoyalty: {
      type: Number,
      required: true,
    },
    sectionName: {
      type: String,
      required: true,
      unique: true,
      //TODO:combination of section, township, and range
    },
    section: {
      type: Number,
      required: true,
      //TODO:can only be 3 digits long
    },
    township: {
      type: String,
      required: true,
      //TODO:starts with 3 numbers and ends with n or s
    },
    range: {
      type: String,
      required: true,
      //TODO:starts with 3 numbers and ends with e or w
    },
    titleSource: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Owner", OwnerSchema);
