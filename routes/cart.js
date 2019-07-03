const express = require('express');
const router = express.Router();
const Game = require('../models/game');



// //-------------get cart----------//
// router.get('/',(req,res)=>{
//     if(typeof req.session.cart !== undefined){
//         res.json(req.session.cart);
//     }
// });



// //-------------post cart----------//
// router.post('/',(req,res)=>{
//     var cart = req.body;
//     req.session.cart = cart;
//     req.session.save(function(err){
//         if(err){throw err}
//         res.json(req.session.cart);
//     })
// })







module.exports = router;