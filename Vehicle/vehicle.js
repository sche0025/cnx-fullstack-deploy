const express = require('express');
const request = require('request');
const vehicle = express.Router();
const baseVehicleGetUrl = process.env.GET_VEHICLES_BASE_URL || 'https://bb61co4l22.execute-api.us-west-2.amazonaws.com/development/vehicles/'
vehicle.get('/vehicles/:id', (req, res) => {
    const id = req.params.id;
    const url = `${baseVehicleGetUrl}${id}`
     request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          res.send(JSON.stringify(response.body));
        }else{
          res.send({ error: 'Internal System Error' });
        }
    })
  });
module.exports = vehicle;