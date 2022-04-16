//const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const UserShema = mongoose.Schema ({
    userName :{
        type : String,
        required : true,
    },
    email : {
        type :String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required: true,
    },
    userType : {
        type: String,
        enum : ["ADMIN", "MANAGER", "DELIVERY", "USER"],
    },
    phoneNumber : {
        type : Number,
    },
    address : {
        doorNumber: {
            type: String,
            required:true,
        },
        line1 : {
            type : String,
            required:true,
        },
        line2 : {
            type : String,
        },
        city : {
            type : String,
            required:true,
        },
        state : {
            type : String,
            required:true,
        },
        country : {
            type : String,
            required:true,
        },
        pincode : {
            type : String,
            required:true,
        },
        landmark : {
            type : String,
        },
    },
    geoLocation : {           //city or state ->  filter panni user la edukkalam 
        type : {
            type : String,
            default : "Point",
            enum : "Point",
        },
        coordinates : [Number],
    },
});


const User = mongoose.model('user', UserShema);

module.exports = { User }