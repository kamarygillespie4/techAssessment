const router = require("express").Router();
const {
  getOwners,
  getSingleOwner,
  createOwner,
  updateOwner,
  deleteOwner,
  addLandHolding,
  deleteLandHolding,
} = require("../../controllers/ownerControllers");

// /api/owners
router.route("/").get(getOwners).post(createOwner);

// /api/owners/:ownerId
router
  .route("/:ownerId")
  .get(getSingleOwner)
  .put(updateOwner)
  .delete(deleteOwner);
router
  .route("/:ownerId/landHoldings/:landHoldingId")
  .post(addLandHolding)
  .delete(deleteLandHolding);

module.exports = router;
