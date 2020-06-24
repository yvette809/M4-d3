const express = require("express")
const usersRouter = require("./services/users")
const moviesRouter = require("./services/movies")

const server = express()

const port = process.env.PORT

server.use(express.json()) // Built in middleware

// ROUTES
server.use("/users", usersRouter)
server.use("/movies", moviesRouter)

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})