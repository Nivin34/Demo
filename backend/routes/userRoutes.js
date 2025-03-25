const express = require("express");

const router = express.Router();

//admin
router.get("/admin", (req, res) =>{
    res.json({message:"admin"})
} )

router.get("/user", (req, res) =>{
    res.json({message:"user"})
} )

module.exports = router;