var express = require("express");
var router = express.Router();
var controller = require("student-controller.js");

router.param("id", conriller.interceptIDs);

router.rout("/")
.get(student-controller.fetchAllStudents);
.post(controller.addStudent);








module.exports = router;