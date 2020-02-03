const express = require("express")
const db = require("./projectsModel")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const projects = await db.getProjects()
        res.status(200).json(projects)
    }
    catch (error){
        next(error)
    }
})

router.post('/', async (req, res) => {
  try {
        return res.status(201).json(await db.addProject(req.body))
    }
    catch{
        res.status(500).json({ message: `Failed to create new project` })
    }
  });


module.exports = router