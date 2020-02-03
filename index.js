const server = require("./server")

const port = process.env.port || 5555

server.listen(port, ()=> console.log(`Magic Happening ON PORT ${port}***`))