const mongoose = require('mongoose')
const validator = require('validator')
const employeeSchema = new mongoose.Schema(
    {
       FirstName:{
            type:String,
            required:true,
        },

        LastName:{
            type:String,
            required:true,
        },
        Phone:{
            type:Number,
            required:true
        }
        
    }
)
const employee = mongoose.model('Employee',employeeSchema)
module.exports = employee