const db = require("./data/dbConfig")

module.exports = {
    getResources,
    addResource
}

function getResources(){
    return db("resources")
}
async function addResource(reqBody){
  const [ id ] = await db("resources").insert(reqBody)
    return db("resources").where("id", id).first()
}