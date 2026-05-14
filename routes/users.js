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
    res.json(obj);
  })
});

router.get('/:id', function(req, res, next) {
  client.get(`/users/${req.params.id}`, (err, request, response, obj)=>{
    assert.ifError(err);
    res.json(obj);
  })
});

router.post('/', function(req, res, next) {
  client.post(`/users/${req.params.id}`, req.body, (err, request, response, obj)=>{
    assert.ifError(err);
    res.json(obj);
  })
});

router.put('/:id', function(req, res, next) {
  client.put(`/users/${req.params.id}`, req.body, (err, request, response, obj)=>{
    assert.ifError(err);
    res.json(obj);
  })
});

router.delete('/:id', function(req, res, next) {
  client.del(`/users/${req.params.id}`, (err, request, response, obj)=>{
    assert.ifError(err);
    res.json(obj);
  })
});

module.exports = router;
