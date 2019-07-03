const mongoose = require('mongoose');



let gameSchema = mongoose.Schema({
    title:{type:String,required:true},
    image:{type:String},
    desc:{type:String,required:true},
    price:{type:String,required:true}
})

module.exports = mongoose.model('game',gameSchema )