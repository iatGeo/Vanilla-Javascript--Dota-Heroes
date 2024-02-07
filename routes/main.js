const express = require("express")
const router = express.Router()
const homeController = require("../controllers/home")
const heroesController = require("../controllers/heroes")

//Main Routes 
router.get("/", homeController.getIndex)
router.get("/heroes", heroesController.getHeroes)

module.exports = router