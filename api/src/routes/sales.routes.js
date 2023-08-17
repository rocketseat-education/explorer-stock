const { Router } = require("express");
const SalesController = require("../controllers/SalesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const salesRoutes = Router();

const salesController = new SalesController();

salesRoutes.use(ensureAuthenticated);

salesRoutes.get("/", salesController.index);

module.exports = salesRoutes;