const { ObjectId } = require("mongoose").Types;

const { LandHolding, Owner } = require("../models");

module.exports = {
  //GET all owners
  getOwners(req, res) {
    Owner.find()
      .then((owners) => res.json(owners))
      .catch((err) => res.status(500).json(err));
  },

  //GET a single owner by its _id and populated landholding data
  getSingleOwner(req, res) {
    Owner.findOne({ _id: req.params.ownerId })
      .select("-__v")
      .then((owner) =>
        !owner
          ? res.status(404).json({ message: "No owner with that ID" })
          : res.json(owner)
      )
      .catch((err) => res.status(500).json(err));
  },

  //POST a new owner:

  // TODO: example data
  //{
  // "name": "lernantino",
  // "entiyType": "vhello"
  // "ownerType": "gnyuj,muimk",
  // "address": "mjmjmjm"
  // "numberOfHoldings": 7,
  //}
  createOwner(req, res) {
    Owner.create(req.body)
      .then((owner) => res.json(owner))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  //PUT to update an owner by its _id
  updateOwner(req, res) {
    Owner.findOneAndUpdate(
      { _id: req.params.ownerId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((owner) =>
        !owner
          ? res.status(404).json({ message: "No owner with this id!" })
          : res.json(owner)
      )
      .catch((err) => res.status(500).json(err));
  },

  //Remove an owner's associated land holdings when deleted.
  deleteOwner(req, res) {
    Owner.findOneAndDelete({ _id: req.params.ownerId })
      .then((owner) =>
        !owner
          ? res.status(404).json({ message: "No owner with that ID" })
          : LandHolding.deleteMany({
              _id: {
                $in: owner.landHoldings,
              },
            })
      )
      .then(() =>
        res.json({ message: "Owner and associated land holdings deleted!" })
      )
      .catch((err) => res.status(500).json(err));
  },

  //POST to add a new land holding to a owners's  list
  addLandHolding(req, res) {
    Owner.findOneAndUpdate(
      { _id: req.params.ownerId },
      { $addToSet: { landHoldings: req.params.landHodingId } },
      { new: true, runValidators: true }
    )
      .then((owner) => {
        if (!owner) {
          res.status(404).json({ message: "No owner with this id" });
          return;
        }
        res.json(owner);
      })
      .catch((err) => res.json(err));
  },

  //Deleter to remove a  land holding from a owners's  list
  deleteLandHolding(req, res) {
    Owner.findOneAndUpdate(
      { _id: req.params.ownerId },
      { $pull: { landHoldings: req.params.landHoldingId } },
      { new: true }
    )
      .then((owner) => {
        if (!owner) {
          return res.status(404).json({ message: "No owner with this id!" });
        }
        res.json(owner);
      })
      .catch((err) => res.json(err));
  },
};
