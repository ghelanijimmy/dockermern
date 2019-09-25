const { getAllUsers, addNewUser, findUser } = require("../controllers/users");
const express = require("express");

const router = express();

router.get("/users", getAllUsers);
router.post("/users/add", addNewUser);
router.post("/user", findUser);

module.exports = router;
