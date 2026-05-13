const express = require('express');
const assert = require('assert');
const restify = require('restify-clients');
const router = express.Router();

const client = restify.createJsonClient({
  url: 'http://localhost:4000'
});


router.get('/', function(req, res, next) {
  client.get('/users', (err, request, response, obj)=>{
    assert.ifError(err);
    res.end(JSON.stringify(obj,null, 2));
  })
});

module.exports = router;
