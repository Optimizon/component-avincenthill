require('dotenv').config();
require('newrelic');
const express = require('express');
const redis = require('redis');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const url = require('url');
const db = require('../database/postgresindex.js');

class Server {
  constructor() {
    this.port = process.env.SERVERPORT || 1337;
    this.proxyPort = process.env.PROXYPORT || 3000;
    this.redisPort = process.env.REDIS_PORT || 6379;
    this.client = redis.createClient({host: 'ec2-18-144-29-61.us-west-1.compute.amazonaws.com', port: this.redisPort});
    this.serverAddress = `http://localhost:${this.port}`;
    this.proxyAddress = `http://localhost:${this.proxyPort}`;
    this.app = express();
    this.cache = this.cache.bind(this);
    this.init();
  }

  init() {
    this.app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
    this.app.use(bodyParser.urlencoded({
      extended: true,
    }));
    this.app.use(cors({ origin: this.proxyAddress }));
    this.app.listen(this.port);
    console.log(`AVH component server listening on ${this.serverAddress}...`);
    
    this.app.use(express.static('public'));
    console.log(`AVH component server serving static react from /public on ${this.serverAddress}...`);
     

    this.handleGets();
    this.handlePosts();
    this.handlePuts();
    this.handleDeletes();
    this.handleOptions();
  }

  cache(req, res, next) {
    const productId = req.originalUrl.split('/')[2];
    this.client.get(productId, function(err, data) {
      if (err) throw err;
      if (data !== null) {
        res.send(JSON.parse(data));
      } else {
        next();
      }
    });
  }

  handleOptions() {
    this.app.options(`/reviews/*`, (req, res) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.status(202).send();
    });
  }

  handleGets() {
    // return reviews with posted productId
    this.app.get(`/reviews/*`, bodyParser.json(), this.cache, (req, res) => {
      const productId = req.originalUrl.split('/')[2]; // get productId from url
      
      db.getReviews(productId, (err, data) => {
        if (err) return console.error(err);
        this.client.setex(productId, 60, JSON.stringify(data));
        res.status(202).send(data);
      });
    });    
  }

  handlePosts() {
    // create a new review
    this.app.post(`/reviews/new`, bodyParser.json(), (req, res) => {
      const productId = req.originalUrl.split('/')[2]; // get productId from url
      // const productId = 10000001;
      db.createReview(productId, (err, data) => {
        if (err) return console.error(err);
        res.status(202).send();
      });
    });
  }

  handlePuts() {
    // increment the helpfulness of a review
    this.app.put(`/helpful/*`, bodyParser.json(), (req, res) => {
      const reviewId = req.originalUrl.split('/')[2]; // get reviewId from url
      db.incrementHelpfulness(reviewId, (err, data) => {
        if (err) return console.error(err);
        res.status(202).send();
      });
    });
    
    // update the content of a review
    this.app.put(`/reviews/*`, bodyParser.json(), (req, res) => {
    const reviewId = req.originalUrl.split('/')[2]; // get reviewId from url
    const data = req.body.results;
      db.updateReview(reviewId, data, (err, result) => {
        if (err) return console.error(err);
        res.status(202).send();
      });
    });
    
    // decrement the helpfulness of a review
    this.app.put(`/helpful/*`, bodyParser.json(), (req, res) => {
    const reviewId = req.originalUrl.split('/')[2]; // get reviewId from from url
      db.decrementHelpfulness(reviewId, (err, data) => {
        if (err) return console.error(err);
        res.status(202).send();
      });
  });
}

  handleDeletes() {
    // delete a review
    this.app.delete(`/reviews/*`, bodyParser.json(), (req, res) => {
    const reviewId = req.originalUrl.split('/')[2]; // get reviewId from from url
      db.deleteReview(reviewId, (err, data) => {
        if (err) return console.error(err);    
        res.status(202).send();
      });
    });
  }
}

const server = new Server();
