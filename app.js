
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = require('./config/port').PORT;
const database = require('./config/database').DATABASE;
const game = require('./routes/games');
const cart = require('./routes/cart');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session)







// mongoose connection
mongoose.connect(database);
mongoose.connection.once('open', (err)=>{
  if(err)throw err;
  console.log('mongo with us');
});
mongoose.connection.on('err',  (err,res)=>{
  if(err)throw err;})



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie:{maxAge:1000*60*60*24*2},
  store:new MongoStore({
    mongooseConnection:mongoose.connection,
    ttl:60*60*24*2
  })
}));


app.use(cors());



app.get('/' ,(req,res,next)=>{
  res.send('الله اكبر')
})

app.post('/cart' ,(req,res,next)=>{
  const cart = req.body;
  req.session.cart = cart;
  req.session.save((err,done)=>{
      if(err) {
          throw err;
      }
      res.json(req.session.cart)
      console.log(req.session.cart)
      
  })
})



app.use('/games', game);
app.use('/cart', cart)


app.listen(port, ()=> console.log(`we run on ${port}`))