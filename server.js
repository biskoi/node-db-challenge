const express = require('express')
const server = express();
const db = require('./schemes/schemes-model')

server.use(express.json());

server.get('/', (req, res) => {
   res.status(200).json({
      message: `Get success`
   });
});

server.get('/projects', (req, res) => {
   db.p()
   .then(rep => {
      res.status(200).json({
         projects: rep
      });
   })
   .catch(err => {
      res.status(500).json({
         message: `Server error. ${err}`
      });
   })
});

server.get('/tasks', (req, res) => {
   db.t()
   .then(rep => {
      res.status(200).json({
         tasks: rep
      });
   })
   .catch(err => {
      res.status(500).json({
         message: `Server error. ${err}`
      });
   })
});

server.get('/resources', (req, res) => {
   db.r()
   .then(rep => {
      res.status(200).json({
         resources: rep
      });
   })
   .catch(err => {
      res.status(500).json({
         message: `Server error. ${err}`
      });
   })
});

server.post('/projects', (req, res) => {
   db.pAdd(req.body)
   .then(rep => {
      res.status(200).json({
         projects: rep
      });
   })
   .catch(err => {
      res.status(500).json({
         message: `Server error. ${err}`
      });
   })
});

server.post('/tasks', (req, res) => {
   db.tAdd(req.body)
   .then(rep => {
      res.status(200).json({
         tasks: rep
      });
   })
   .catch(err => {
      res.status(500).json({
         message: `Server error. ${err}`
      });
   })
});

server.post('/resources', (req, res) => {
   db.rAdd(req.body)
   .then(rep => {
      res.status(200).json({
         resources: rep
      });
   })
   .catch(err => {
      res.status(500).json({
         message: `Server error. ${err}`
      });
   })
});

module.exports = server;