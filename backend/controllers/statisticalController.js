const Product = require('../models/Product');
const RepairProduct = require("../models/RepairProduct");

const statisticalController = {
    countProduct: async (req, res) =>{
        try {
            // Lấy số lượng sản phẩm từ bảng Product
            const productResult = await Product.aggregate([
                {
                    $group: {
                        _id: "$tenSP",
                        count: { $sum: 1 }
                    }
                }
            ]);

            // Lấy số lượng sản phẩm từ bảng RepairProduct
            const repairProductResult = await RepairProduct.aggregate([
                {
                    $group: {
                        _id: "$tenSP",
                        count: { $sum: 1 }
                    }
                }
            ]);

            // Kết hợp cả hai kết quả lại thành một đối tượng
            const result = {
                productCounts: productResult,
                repairProductCounts: repairProductResult
            };

            // Trả về kết quả cho client
            return res.status(200).json(result);
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).json({ message: 'Đã xảy ra lỗi', error: error.message });
        }
    }
}

module.exports = statisticalController;
