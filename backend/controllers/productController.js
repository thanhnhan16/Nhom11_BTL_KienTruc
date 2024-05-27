const Product = require('../models/Product');
const RepairCost = require('../models/RepairCost');
const RepairProduct =require('../models/RepairProduct')

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

            soDienThoai=phoneNumber

            const product = new Product({
                tienTra,
                soDienThoai,
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
    },

    sendInfoRepair: async(req,res)=>{
        try{
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
        const productRepairCost = await RepairCost.findOne({ tenSP: tenSP });

         let gia =0;
        if(pin==true){
            gia+=productRepairCost.pin;
        }
        if(rung==true){
            gia+=productRepairCost.rung;
        }
        if(chanSac==true){
            gia+=productRepairCost.chanSac;
        }
        if(camTruoc==true){
            gia+=productRepairCost.camTruoc;
        }
        if(camSau==true){
            gia+=productRepairCost.camSau;
        }
        if(loa==true){
            gia+=productRepairCost.loa;
        }
        if(nutHome==true){
            gia+=productRepairCost.nutHome;
        }
        if(vo==true){
            gia+=productRepairCost.vo;
        }
        if(kinh==true){
            gia+=productRepairCost.kinh;
        }
        if(mangHinh==true){
            gia+=productRepairCost.mangHinh;
        }
        if(khaySim==true){
            gia+=productRepairCost.khaySim;
        }
        


        console.log(tenSP, pin, rung, chanSac,  camTruoc, camSau, loa, nutHome, vo,  lung, kinh,  mangHinh,    khaySim,gia)

        

        if (productRepairCost) {
            res.status(200).json({ productRepairCost, gia });; // Trả về sản phẩm nếu tìm thấy
        } else {
            res.status(404).json({ message: 'Không tìm thấy sản phẩm' }); // Trả về thông báo nếu không tìm thấy
        }
    } catch (error) {
        res.status(500).json({ message: 'Đã xảy ra lỗi khi tìm kiếm sản phẩm', error: error.message });
    }

    },
    sendInfoRepairForSave: async (req,res)=>{
        try {
            const {
                tenSP,      
                soDienThoai,  
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
    
            const information = new RepairProduct({
                tenSP,    
                soDienThoai,    
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
            await information.save();
            console.log(tenSP, pin, rung, chanSac,  camTruoc, camSau, loa, nutHome, vo,  lung, kinh,  mangHinh,    khaySim,)
            return res.status(200).json({ message: 'Product saved successfully', information });
        } catch (error) {
            console.log("Error:", error);
            return res.status(500).json({ message: "Đã xảy ra lỗi", error: error.message });
        }
        
        
    },


   
}

module.exports = productController;