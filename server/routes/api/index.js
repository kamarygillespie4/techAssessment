const router = require("express").Router();
const userRoutes = require("./userRoutes");
const ownerRoutes = require("./ownerRoutes");
const landHoldingRoutes = require("./landHoldingRoutes");

router.use("/users", userRoutes);
router.use("/owners", ownerRoutes);
router.use("/landHoldings", landHoldingRoutes);

module.exports = router;
