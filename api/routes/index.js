const express = require("express");

const verifyAuth = require("../middlewares/verifyAuth");

const productsRouter = require("./products");
const supplierRouter = require("./suppliers");
const categoryRouter = require("./categories");
const paymentRouter = require("./payment");
const users = require("./users");

const orders = require("./orders");
const commentRouter = require("./comments");
const usuarioRouter = require("./usuario");
const authRouter = require("./auth");

const router = express.Router();

router.use("/products", productsRouter);
router.use("/suppliers", supplierRouter);
router.use("/categories", categoryRouter);
router.use("/payment", paymentRouter);
router.use("/users", verifyAuth, users);

router.use("/orders", orders);
router.use("/comments", commentRouter);
router.use("/usuario", usuarioRouter);
router.use("/auth", authRouter);

module.exports = router;
