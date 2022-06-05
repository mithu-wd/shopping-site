const express=require("express");
const { home } = require("../controllers/controller");

const router=express.Router()

router.route("/home").get(home)

module.exports=router;