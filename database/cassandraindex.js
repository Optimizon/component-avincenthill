require('dotenv').config();
const cassandra = require('cassandra-driver');
const async = require('async');
const helpers = require('../server/helpers/helpers.js');

class Database {
  constructor() {
    this.usingEnv = false;
    this.user = 'Nick Chang';
    this.pw = 'nick';
    if (this.usingEnv) {
      this.connectionString = `mongodb://${this.user}:${this.pw}${this.dburi}`;
    } else {
      this.connectionString = `postgresql://${this.user}:${this.pw}@reviews.server.com:5432/reviews`;
    }
    this.client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'reviews'});
    this.init();
  }


  getReviews(productId, cb) {
    const search = { productId };
    this.client.query(`SELECT * FROM reviews2 where productid = ${search}`, (err, reviews) => {
      if (err) return console.error(err);
      return cb(null, reviews);
    });
  }

  incrementHelpfulness(reviewId, cb) {
    const search = { reviewId };
    this.client.query(`SELECT * FROM reviews2 where reviewid = ${search}`, (err, review) => {
      if (review) {
        const incrementedObj = review[0];
        incrementedObj.numHelpful += 1;
        const incrementedReview = new this.Review(incrementedObj);
        incrementedReview.save((err) => {
          if (err) return console.error(err);
          return cb(null, review);
        });
      }
    });
  }

  init() {
    this.client.connect((err, client) => { if(err) { console.log(err)} else { console.log('Connected to client'); }});
  }

const database = new Database();
module.exports = database;

/*
example data
{"_id":"5b918722d4a71c1897abb02f","productId":37,"reviewId":368,"username":"Parker_Nader66","stars":1,"title":"est dolore ducimus","text":"Vel molestias consequatur voluptatum vero labore dicta repellendus aut corporis. Et cupiditate minus nam. Perspiciatis dolorem omnis provident.","timestamp":"2018-02-01T17:26:28.993Z","numHelpful":965,"verifiedPurchase":true,"imageUrl":"http://lorempixel.com/640/480","__v":0}
*/
