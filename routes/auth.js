const router = require("express").Router();
const { login, registerOne, updateOne, deleteOne, moderation, getAll, registerMany, deleteMany, updateMany } = require("./controllers/auth");

router.route("/").get(getAll).post(registerOne);
router.route("/:id").post(login).put(updateOne).delete(deleteOne).put(moderation);
router.route("/all").post(registerMany).delete(deleteMany).put(updateMany);

module.exports = router;
