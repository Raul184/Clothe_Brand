const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
// Better performance on browsers
const compression = require('compression');
const enforce = require('express-sslify');


if(process.env.NODE_ENV === 'development') require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;


// Req => access as a json file
app.use( bodyParser.json() );
// urls strings properly formatted
app.use( bodyParser.urlencoded({ extended: true }) )
// App web server hosted in a != origin from users
app.use( cors() );

// On Hk Server
if( process.env.NODE_ENV === 'production'){
  // serving clientApp
  app.use( compression() );
  app.use( enforce.HTTPS({ trustProtoHeader: true }));
  app.use( express.static(path.join(__dirname , 'client/build')));
  
  // For ALL reqs ==> build.js
  app.get( '*' , function(req , res ){
    res.sendFile( path.join( __dirname , 'client/build' , 'index.html'))
  })
}


// Router
// Stripe Payments
app.use( '/payment' , require('./routes/stripe.js'))


app.listen( port , error => {
  if(error) throw error; 
  console.log('Server running on port: ' + port);  
});

// PWA
app.get( '/service-worker.js' , ( req , res ) => {
  res.sendFile( path.resolve( __dirname , 'client' , 'build' , 'service-worker.js' ))
})

app.post( '/payment' , ( req, res) => {
  const body = {
    source: req.body.token.id ,
    amount: req.body.amount ,
    currency: 'usd'
  }

  stripe.charges.create( 
    body , 
    (stripeErr , stripeRes) => {
      stripeErr ? 
      res.status(500).send({ error: stripeErr })
      :
      res.status(200).send({ success: stripeRes })
    })
})