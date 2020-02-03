const express = require("express")
const db = require("./resourcesModel")
const router = express.Router()

router.get("/", async (req, res, next) =>{
    try{
        const resources = await db.getResources()
        res.status(200).json(resources)
    }
    catch(error){
        next(error)
    }
})
router.post('/', async (req, res) => {
   const newResource = { ...req.body}
    try{
    const success = await db.addResource(newResource)
    res.status(201).json(success)
  }
  catch{
    res.status(500).json({ error: "cannot add"})
  }
});









module.exports = router 