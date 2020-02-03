const express = require("express");
const db = require("./tasksModel");
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const tasks = await db.getTasks()
        res.status(200).json(tasks)
    }
    catch(err){
        next(err)
    }
})
router.post('/', async (req, res) => {
  const newTask = { ...req.body}
    try{
    const success = await db.addTask(newTask)
    res.status(201).json(success)
  }
  catch{
    res.status(500).json({ error: "cannot add"})
  }
});

module.exports = router