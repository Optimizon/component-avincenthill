require('dotenv').config();
const pg = require('pg');
const helpers = require('../server/helpers/helpers.js');

class Database {
  constructor() {
    this.usingEnv = true;
    if (this.usingEnv) {
      this.connectionObject = {
        user: process.env.USER,
        host: 'ec2-54-183-184-198.us-west-1.compute.amazonaws.com',
        database: process.env.DB,
        port: 5432
      }
    } else {
      this.connectionObject = {
        user: 'Nick Chang',
        host: 'localhost',
        database: 'reviews',
        password: 'nick',
        port: 5432
      }
    }
    this.pool = new pg.Pool(this.connectionObject);
  }


  getReviews(productId, cb) {
    const search = productId;
    this.pool.query(`SELECT * FROM master where productid = ${search}`, (err, reviews) => {
      if (err) return console.error(err);
      return cb(null, reviews.rows);
    });
  }

  createReview(productId, cb) {
    const search = 10000000;
    this.pool.query(`SELECT reviewid FROM master where productid = ${search}`, (err, reviews) => {
      const lastReviewId = reviews.rows[reviews.rows.length-1].reviewid 
      this.pool.query(`INSERT INTO master4 (productid,reviewid,username,stars,title,text,timestamp,numhelpful,verifiedpurchase,imageurl) VALUES (${search},${lastReviewId+1},'nick', 5, 'nick${lastReviewId+1}', 'Inserted ${lastReviewId+1}', '2018-10-05', 5, false, 'http://lorempixel.com/640/480')`, (err, receipt) => {
        if (err) return console.error(err);
        console.log(receipt);
        return cb(null, receipt);
      });
    });
  }

  incrementHelpfulness(reviewId, cb) {
    const search = reviewId;
    this.pool.query(`SELECT numhelpful FROM master where reviewid = ${search}`, (err, oldVal) => {
      this.pool.query(`UPDATE master4 SET numhelpful = ${oldVal.rows[0].numhelpful+1} where reviewid = ${search}`, (err, review) => {
        return cb(err, review);
      });
    });
  }

   decrementHelpfulness(reviewId, cb) {
    const search = reviewId;
    this.pool.query(`SELECT numhelpful FROM master where reviewid = ${search}`, (err, oldVal) => {
      this.pool.query(`UPDATE master4 SET numhelpful = ${oldVal.rows[0].numhelpful-1} where reviewid = ${search}`, (err, review) => {
        return cb(err, review);
      });
    });
  }

   updateReview(reviewId, data, cb) {
    const search = reviewId;
    const {username, stars, title, text, timestamp, numhelpful, verifiedpurchase, imageurl} = data;
    this.pool.query(`UPDATE master SET username = ${username}, stars = ${stars}, title = ${title}, text = ${text}, timestamp = ${timestamp}, numhelpful = ${numhelpful}, verifiedpurchase = ${verifiedpurchase}, imageurl = ${imageurl} where reviewid = ${search}`, (err, review) => {
      return cb(err, review);
    });
  }

   deleteReview(reviewId, cb) {
    const search = reviewId;
    this.pool.query(`DELETE FROM master WHERE reviewid = ${search}`, (err, review) => {
      return cb(err, review);
    });
  }
}

const database = new Database();
module.exports = database;

/*
example data
{"_id":"5b918722d4a71c1897abb02f","productId":37,"reviewId":368,"username":"Parker_Nader66","stars":1,"title":"est dolore ducimus","text":"Vel molestias consequatur voluptatum vero labore dicta repellendus aut corporis. Et cupiditate minus nam. Perspiciatis dolorem omnis provident.","timestamp":"2018-02-01T17:26:28.993Z","numHelpful":965,"verifiedPurchase":true,"imageUrl":"http://lorempixel.com/640/480","__v":0}
*/
