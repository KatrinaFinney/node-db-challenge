const db = require("./data/dbConfig")

module.exports = {
    getTasks,
    addTask 
    
}

function getTasks(){
    return db("tasks")
}

async function addTask(reqBody){
  const [ id ] = await db("tasks").insert(reqBody)
    return db("tasks").where("id", id).first()
}