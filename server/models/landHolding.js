//destructer model and schema off of mongoose
const { Schema, model, Types } = require("mongoose");

// create land holding schema
const landHoldingSchema = new Schema({
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
    minlength: 3,
    maxlength: 3,
    //DONE:can only be 3 digits long
  },
  township: {
    type: String,
    required: true,
    //TODO:starts with 3 numbers and ends with n or s
    match: [/^\d{3}[NS]$/],
  },
  range: {
    type: String,
    required: true,
    //TODO:starts with 3 numbers and ends with e or w
    match: [/^\d{3}[EW]$/],
  },
  titleSource: {
    type: String,
    required: true,
  },
  //schema settings

  // toJSON: {
  //   virtuals: true,
  // },
  // id: false,
});

//use thoughtSchema to build model called thought
const LandHolding = model("LandHolding", landHoldingSchema);

module.exports = LandHolding;
