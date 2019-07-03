const express = require('express');
const router = express.Router();
const Game = require('../models/game');



//-------------get games----------//

router.get('/', (req,res,next)=>{
    Game.find({}, (err, game)=>{
        if(err) console.log(err);
        // console.log(req.session)
        res.status(200).json(game);
    })
})



//-------------get game----------//

router.get('/:id', (req,res,next)=>{
    const id = req.params.id;
    Game.findById(id, (err, game)=>{
        if(err) console.log(err);
        res.status(200).json(game);
    })
})




//-------------add game----------//

router.post('/addGame', (req,res,next)=>{
    let newGame = new Game({
        title:req.body.title,
        image:req.body.image,
        desc:req.body.desc,
        price:req.body.price
    })
    
    if(newGame.image === ''){
        newGame.image = "https://via.placeholder.com/350x150";
        
    }

    newGame.save((err,saved)=>{
        if(err) console.log(err);
        res.status(200).json(saved)
    })

   
})




//-------------edit game----------//

router.put('/editGame/:_id',(req,res,next)=>{
    const id = req.params._id;
    Game.findByIdAndUpdate(id,{
        $set:{
            title:req.body.title,
            image:req.body.image,
            desc:req.body.desc,
            price:req.body.price
        }
    }, (err,game )=>{
        if(err) console.log(err);
        res.status(200).json(game)
    })
})




//-------------delete game----------//

router.delete('/delete/:id',(req,res,next)=>{
    const _id = req.params.id;
    Game.findById(_id).then(
        game=>game.remove().then(()=>res.json({success:true}))
    ).catch(err => res.status(404).json({ gamenotfound: 'No game found' }))
})




module.exports = router;