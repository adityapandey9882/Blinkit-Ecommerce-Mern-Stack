import mongoose from "mongoose";

const addressSchmea = new mongoose.Schema.ObjectId({
    address_line : {
        type : String,
        default : ""
    },
    city : {
        type : "String",
        default : ""
    },
    state : {
        type : String,
        default : ""
    },
    pincode : {
        type : String
    },
    country : {
        type : String
    },
    mobile : {
        type : Number,
        default : null
    },
    status : {
        type : Boolean,
        default : true
    }
},{
    timestamps : true
})

const AddressModel = mongoose.model('address',addressSchmea)

export default AddressModel