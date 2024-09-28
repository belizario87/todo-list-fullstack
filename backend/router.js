const express = require("express");
const taskController = require("./controllers/tasksController");

const router = express.Router();

router.get("/tasks", taskController.getAll);
router.post("/tasks", taskController.createTask);

module.exports = router;
