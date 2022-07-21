const router = require("express").Router();
const { getAll, getOne, createOne, updateOne, deleteOne, createMany, updateMany, deleteMany } = require("./controllers/business");

router.route("/").get(getAll).post(createMany).put(updateMany).delete(deleteMany);
router.route("/:id").get(getOne).post(createOne).put(updateOne).delete(deleteOne);

module.exports = router;
