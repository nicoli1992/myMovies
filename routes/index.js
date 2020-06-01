const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController");
const upload = require("../config/upload");

router.get("/", movieController.index);
router.post("/cadastrar", upload.any(), movieController.store);
router.get("/editar/:id", movieController.edit);

module.exports = router;
