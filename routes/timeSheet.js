const router = require("express").Router();

// const { addTimeSheetRecordById, getTimeSheetRecordById, updateTimeSheetRecordById, deleteTimeSheetRecordById, getTimeSheetRecords } = require("./controllers/timeSheet");
const { getTimeSheetRecordById, addTimeSheetRecord, addTimeSheetRecordById, deleteTimeSheetRecordById, updateTimeSheetRecordById } = require("./controllers/timeSheet");

router.route("/").post(addTimeSheetRecord);
router.route("/:id").get(getTimeSheetRecordById).post(addTimeSheetRecordById).delete(deleteTimeSheetRecordById).put(updateTimeSheetRecordById);

module.exports = router;
