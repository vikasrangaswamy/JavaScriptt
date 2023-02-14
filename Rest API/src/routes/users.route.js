const express = require("express")

const {getUsers , getUserById , createUser , validateUser} = require("../controllers/users.controller.js")
const router  = express.Router();

const app = express()

router.get("/",getUsers).get("/:id" , getUserById).post("/" , createUser)

module.exports = router