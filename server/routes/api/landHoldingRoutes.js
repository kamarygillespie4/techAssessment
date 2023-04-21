const router = require("express").Router();
const {
  getLandHoldings,
  getLandHolding,
  createLandHolding,
  updateLandHolding,
  deleteLandHolding,
} = require("../../controllers/landHoldingControllers");

// /api/landHoldings
router.route("/").get(getLandHoldings).post(createLandHolding);

// /api/landHoldings/:landHoldingId
router
  .route("/:landHoldingId")
  .get(getLandHolding)
  .put(updateLandHolding)
  .delete(deleteLandHolding);

module.exports = router;
