const Product = require('../models/Product');
const RepairCost = require('../models/RepairCost');

const productController = {
    getInfomation: async (req, res) => {
        try {
            const { 
                tienTra,
                phoneNumber,
                thoigianSD,
                donViThoiGian,
                chatLuong,
                tenSP,
                mangHinh,
                pin,
                rung,
                camTruoc,
                camSau,
                chanSac,
                loa,
                vo,
                lung,
                kinh,
                nutHome,
                khaySim
            } = req.body;

            const product = new Product({
                tienTra,
                phoneNumber,
                thoigianSD,
                donViThoiGian,
                chatLuong,
                tenSP,
                mangHinh,
                pin,
                rung,
                camTruoc,
                camSau,
                chanSac,
                loa,
                vo,
                lung,
                kinh,
                nutHome,
                khaySim
            });

            await product.save();

            console.log(tienTra, phoneNumber, thoigianSD + donViThoiGian, chatLuong, tenSP, mangHinh, pin, rung, camTruoc, camSau, chanSac, loa, vo, lung, kinh, nutHome, khaySim);
            return res.status(200).json({ message: 'Product saved successfully', product });
        } catch (error) {
            console.log("Error:", error);
            return res.status(500).json({ message: "Đã xảy ra lỗi", error: error.message });
        }
    },
    
    putRepairCost: async (req,res)=>{
        const {
            tenSP,        
            pin,
            rung,
            chanSac,
            camTruoc,
            camSau,
            loa,
            nutHome,
            vo,
            lung,
            kinh,
            mangHinh,     
            khaySim,
        }=req.body

        const repairCost = new RepairCost({
            tenSP,        
            pin,
            rung,
            chanSac,
            camTruoc,
            camSau,
            loa,
            nutHome,
            vo,
            lung,
            kinh,
            mangHinh,     
            khaySim,
        })
        await repairCost.save();
        console.log(tenSP, pin, rung, chanSac,  camTruoc, camSau, loa, nutHome, vo,  lung, kinh,  mangHinh,    khaySim,)
    }
}

module.exports = productController;