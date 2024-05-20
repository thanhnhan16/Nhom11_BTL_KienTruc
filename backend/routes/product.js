const productController = require("../controllers/productController");
const router = require("express").Router();

router.post("/api/sendInfo", productController.getInfomation);
router.post("/api/repair", productController.putRepairCost);
module.exports = router;