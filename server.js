const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');


if(process.env.NODE_ENV === 'development') require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

// Req => access as a json file
app.use(bodyParser.json());
// urls strings properly formatted
app.use(bodyParser.urlencoded({ extended: true }))
// App web server hosted in a != origin from users
app.use(cors());

// On Hk Server
if(process.env.NODE_ENV === 'production'){
  // serving clientApp
  app.use(express.static(path.join(__dirname , 'client/build')));
}
// For ALL reqs ==> build.js
app.get('*' , (req , res ) => res.sendFile(
  path.join(__dirname , 'client/build' , 'index.html')
  )
)

// Router
// Stripe Payments
app.use('/payment' , require('./routes/stripe.js'))


app.listen(port , error => {
  if(error) throw error; 
  console.log('Server running on port: ' + port);  
});