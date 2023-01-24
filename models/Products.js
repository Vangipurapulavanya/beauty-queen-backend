const mongoose = require ("mongoose");

const productSchema = new mongoose.Schema(
    {
        name:{type:String,unique:true},
		description:{type:String},
		image:{type:String},
		price:{type:Number},
		quantity:{type:Number}
    },
    {timestamps:true}

);

module.exports = mongoose.model("Product",productSchema);
