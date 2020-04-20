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

app.listen(port , error => {
  if(error) throw error; 
  console.log('Server running on port: ' + port);  
});

// On Hk Server
if(process.env.NODE_ENV === 'production'){
  // server build.js
  app.use(express.static(path.join(__dirname , 'client/build')));
}

app.get('*' , (req , res ) => res.sendFile(
  path.join(__dirname , 'client/build' , 'index.html')
  )
)