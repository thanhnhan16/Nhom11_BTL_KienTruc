const productController = require("../controllers/productController");
const statisticalController = require("../controllers/statisticalController");
const router = require("express").Router();

router.post("/api/sendInfo", productController.getInfomation);
router.post("/api/repair", productController.putRepairCost);
router.post("/api/sendInfoRepair", productController.sendInfoRepair);
router.post("/api/sendInfoRepairForSave", productController.sendInfoRepairForSave);
router.post("/api/countProduct",statisticalController.countProduct);
module.exports = router;