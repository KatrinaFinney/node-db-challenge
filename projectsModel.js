const db = require("./data/dbConfig")

module.exports = {
    getProjects,
    addProject
}

function getProjects(){
    return db("projects")
}

async function addProject(reqBody){
  const [ id ] = await db("projects").insert(reqBody)
    return db("projects").where("id", id).first()
}