const router = require("express").Router();
const {
  getOwners,
  getSingleOwner,
  createOwner,
  updateOwner,
  deleteOwner,
  addLandHolding,
  deleteLandHolding,
  getLandHoldings,
  updateLandHolding,
} = require("../../controllers/ownerControllers.js");

//just /owners
router.route("/").get(getOwners).post(createOwner);

router.get("/landHoldings", getLandHoldings);

//--- /owners/:ownerId
router
  .route("/:ownerId")
  .get(getSingleOwner)
  .put(updateOwner)
  .delete(deleteOwner)
  .get(getLandHoldings);

//////router.route("/landHoldings").get(getLandHoldings);

router
  .route("/:ownerId/landHoldings")
  .post(addLandHolding)
  .get(getLandHoldings);

router
  .route("/:ownerId/landHoldings/:landHoldingId")
  .delete(deleteLandHolding)
  .put(updateLandHolding);

module.exports = router;
