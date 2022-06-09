const bodyParser = require('body-parser');
const express = require('express');
const dealerRoutes = require('./Dealer/dealer');
const vehicleRoutes = require('./Vehicle/vehicle');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
require('dotenv').config();

app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.setHeader(
        'Acess-Control-Allow-Methods', 
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    res.setHeader( 'X-Requested-With', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    next();
})


app.use('/', dealerRoutes);
app.use('/', vehicleRoutes);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('./cnx-frontend/build'));
  app.get('*',(req, res)=>{
    console.log(path.resolve(__dirname,'cnx-frontend/build','index.html'));
    res.sendFile(path.resolve(__dirname,'cnx-frontend/build','index.html'));
  })
}

const server = app.listen(port, () => console.log('Server ready'));

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
  });
});
