const router = require("express").Router();
const { addEmployee, getAllEmployees, getEmployeeById, updateEmployeeById, deleteEmployeeById, addMultipleEmployees } = require("./controllers/employee");

// router.route("/").get("addEmployee");
router.route("/").post(addEmployee).get(getAllEmployees);
router.route("/:id").get(getEmployeeById).put(updateEmployeeById).delete(deleteEmployeeById);
router.route("/all").post(addMultipleEmployees);

module.exports = router;
