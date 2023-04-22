const { ObjectId } = require("mongoose").Types;

const { LandHolding } = require("../models");

module.exports = {
  //GET all land holdings
  getLandHoldings(req, res) {
    LandHolding.find()
      .then((landHoldings) => res.json(landHoldings))
      .catch((err) => res.status(500).json(err));
  },

  //GET a single owner by its _id and populated landholding data
  getLandHolding(req, res) {
    LandHolding.findOne({ _id: req.params.landHoldingId })
      .select("-__v")
      .then((landHolding) =>
        !landHolding
          ? res.status(404).json({ message: "No land Holding with that ID" })
          : res.json(landHolding)
      )
      .catch((err) => res.status(500).json(err));
  },

  //POST a new land holding:

  // TODO: example data
  //{
  // "name": "lernantino",
  // "entiyType": "vhello"
  // "ownerType": "gnyuj,muimk",
  // "address": "mjmjmjm"
  // "numberOfHoldings": 7,
  //}

  createLandHolding(req, res) {
    LandHolding.create(req.body)
      .then((landHolding) => res.json(landHolding))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  //PUT to update an owner by its _id
  updateLandHolding(req, res) {
    LandHolding.findOneAndUpdate(
      { _id: req.params.landHoldingId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((landHolding) =>
        !landHolding
          ? res.status(404).json({ message: "No land holding with this id!" })
          : res.json(landHolding)
      )
      .catch((err) => res.status(500).json(err));
  },

  //Remove an owner's associated land holdings when deleted.
  deleteLandHolding(req, res) {
    LandHolding.findOneAndDelete({ _id: req.params.landHoldingId })

      .then(() => res.json({ message: "Land holding deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
};
