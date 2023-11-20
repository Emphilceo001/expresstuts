const express = require("express");
const router = express.Router();
// const Tasks = require("../model/taskModel");
const {
  single_page,
  create_task,
  delete_task,
  edit_page,
  edit_task,
} = require("../controller/taskContoller");

//post route C -- create
router.post("/create", create_task);

//route params for single page
router.get("/route/:id", single_page);

//delete route D-- delete

router.get("/delete/:id", delete_task);

//update route U --update
router.post("/edit/:id", edit_task);

// edit page route
router.get("/editpage/:id", edit_page);

module.exports = router;
