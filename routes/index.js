const express = require("express");
const { getProduct } = require("../controllers/product");
const { getUsers, addUser, editUser, deleteUser, getUserById } = require("../controllers/User");
const { getVariabel } = require("../controllers/variabel");
const router = express.Router();

// =============================================================
// User
// =============================================================

router.get("/user", getUsers);
router.get("/user/:id", getUserById);
router.post("/user", addUser);
router.put("/user/:id", editUser);
router.delete("/user/:id", deleteUser);

router.get("/produk", getProduct);

router.get("/variabel", getVariabel);
module.exports = router;
