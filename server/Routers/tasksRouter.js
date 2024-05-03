const express = require("express");
const tasks = require("../controller/taskController");

const router = express.Router();


router.get("/get/task", tasks.gettask)
router.post("/add/task", tasks.insertTasks)
router.put("/update/task/:id", tasks.update)
router.delete("/delete/task/:id", tasks.deletetask)


module.exports = router;