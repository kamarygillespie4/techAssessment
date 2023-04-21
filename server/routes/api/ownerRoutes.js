const router = require("express").Router();
const {
  getOwners,
  getSingleOwner,
  createOwner,
  updateOwner,
  deleteOwner,
} = require("../../controllers/ownerControllers");

// /api/owners
router.route("/").get(getOwners).post(createOwner);

// /api/owners/:ownerId
router
  .route("/:ownerId")
  .get(getSingleOwner)
  .put(updateOwner)
  .delete(deleteOwner);

module.exports = router;
