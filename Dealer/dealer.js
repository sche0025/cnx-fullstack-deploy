const express = require('express');
const request = require('request');
const dealer = express.Router();
const baseGetDealerUrl = process.env.GET_DEALERS_BASE_URL || 'https://bb61co4l22.execute-api.us-west-2.amazonaws.com/development/dealers'
dealer.get('/api/dealers', (req, res) => {
     request(baseGetDealerUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          res.send(JSON.stringify(response.body));
        }else{
          res.send({ error: 'Internal System Error' });
        }
    })
  });
module.exports = dealer;