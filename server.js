const express = require("express")

const projectsRouter = require("./projectsRouter")
const resourceListRouter = require("./resourcesRouter")
const tasksRouter = require("./tasksRouter")

const server = express()

server.use(express.json())
server.use(express.Router())

server.get('/', (req, res)=> {
    res.send(`<h1>Let's Go Girl</h3>`)
})

server.use("/api/projects", projectsRouter )
server.use("/api/resources", resourceListRouter)
server.use("/api/tasks", tasksRouter)

module.exports = server