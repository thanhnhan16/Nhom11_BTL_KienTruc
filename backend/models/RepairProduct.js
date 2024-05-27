const mongoose = require('mongoose');

const RepairProductSchema = new mongoose.Schema({
            tenSP: String, 
            soDienThoai:Number,       
            pin: Boolean,
            rung: Boolean,
            chanSac: Boolean,
            camTruoc: Boolean,
            camSau: Boolean,
            loa: Boolean,
            nutHome: Boolean,
            vo: Boolean,
            lung: Boolean,
            kinh: Boolean,
            mangHinh: Boolean,     
            khaySim: Boolean,
}, {
    timestamps: true
});

const RepairProduct = mongoose.model('RepairProduct', RepairProductSchema);

module.exports = RepairProduct;
