const router = require('express').Router();
const gameController = require('../controllers/gamesController')

router.route("/").post((req,res) => gameController.create(req,res));
router.route("/").get((req,res) =>{gameController.getAll(req,res)});
router.route("/").delete((req,res) => {gameController.delete(req,res)});


module.exports = router;