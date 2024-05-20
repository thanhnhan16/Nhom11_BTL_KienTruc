const mongoose = require('mongoose');

const RepairCostSchema = new mongoose.Schema({
            tenSP: String,        
            pin: Number,
            rung: Number,
            chanSac: Number,
            camTruoc: Number,
            camSau: Number,
            loa: Number,
            nutHome: Number,
            vo: Number,
            lung: Number,
            kinh: Number,
            mangHinh: Number,     
            khaySim: Number,
});

const RepairCost = mongoose.model('RepairCost', RepairCostSchema);

module.exports = RepairCost;
