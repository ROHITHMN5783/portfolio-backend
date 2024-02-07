const mongoose = require("mongoose");
const express = require("express");
const Projectcontroller = require("../controllers/projectcontroller");

const router = express.Router();

router.route("/newproj").post(Projectcontroller.Newproject);
router.route("/getproj").get(Projectcontroller.getprojects);
router.route("/updateproj/:id").put(Projectcontroller.updateprojects);
router.route("/deleteproj/:id").delete(Projectcontroller.Deleteproject);
module.exports = router;
