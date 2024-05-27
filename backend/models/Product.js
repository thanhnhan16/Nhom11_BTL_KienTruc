const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    tienTra: Number,
    soDienThoai: String,
    thoigianSD: String,
    donViThoiGian: String,
    chatLuong: Number,
    tenSP: String,
    mangHinh: Boolean,
    pin: Boolean,
    rung: Boolean,
    camTruoc: Boolean,
    camSau: Boolean,
    chanSac: Boolean,
    loa: Boolean,
    vo: Boolean,
    lung: Boolean,
    kinh: Boolean,
    nutHome: Boolean,
    khaySim: Boolean
}, {
    timestamps: true
});

const Product = mongoose.model('recalledproducts', ProductSchema);

module.exports = Product;
