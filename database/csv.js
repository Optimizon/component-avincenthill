var faker = require('faker');
var helpers = require('../server/helpers/helpers.js');
var fs = require('fs');

var csv = require('fast-csv');

var ws = fs.createWriteStream('data.csv');


var productIdCounter = 1;
var reviewsCounter = 0;

    // const recursivelyCreateFakeDocs = () => {
    //   if (productIdCounter === 2000) {
    //   	csv.write(results, {headers: false}).pipe(ws);
    //     return;
    //   }

      // CREATE TABLE reviews (
      // productId int,
      // reviewId int,
      // username text,
      // stars int,
      // title text,
      // text text,
      // timestamp text,
      // numHelpful int,
      // verifiedPurchase boolean,
      // imageUrl text
      // );

// "productId", "reviewId", "username", "stars", "title", "text", "timestamp", "numHelpful", "verifiedPurchase", "imageUrl"
// var results = [];
// while(productIdCounter < 101) {
// 	  const reviewsArray = [ productIdCounter, reviewsCounter, faker.internet.userName(), helpers.getRandomInt(6), faker.random.words(), faker.lorem.paragraphs(), faker.date.past(), helpers.getRandomInt(1000), Math.random() < 0.5, faker.image.imageUrl()];
//     results.push(reviewsArray);
//     reviewsCounter += 1;
//     if (reviewsCounter % 10 === 0) {
//       productIdCounter += 1;
//     }	
//   	if(productIdCounter % 1000 === 0) {
//   		console.log(productIdCounter);
//   	}
//   }

// csv.write(results, {headers: ["productId", "reviewId", "username", "stars", "title", "text", "timestamp", "numHelpful", "verifiedPurchase", "imageUrl"]}).pipe(ws);  


  // for(var i = 0; i < 100; i++) {
  // 	var results = [];
  // 	for(var j = 0; j < 100; j++) {
	 //    const reviewsArray = [ productIdCounter, reviewsCounter, faker.internet.userName(), helpers.getRandomInt(6), faker.random.words(), faker.lorem.paragraphs(), faker.date.past(), helpers.getRandomInt(1000), Math.random() < 0.5, faker.image.imageUrl()];
	 //    results.push(reviewsArray.join(','));
	 //    reviewsCounter += 1;
	 //    if (reviewsCounter % 10 === 0) {
	 //      productIdCounter += 1;
	 //    }	
  // 	}
  // 	if(productIdCounter % 1000 === 0) {
  // 		console.log(productIdCounter);
  // 	}
  //   fs.appendFileSync('./data.csv', results.join('\n'));
  // }


// var counter = 20;
// var getData = (i, reviewId) => {
// 	ws.removeAllListeners('drain');
// 	for(; i < counter * 5; i++) {
// 	  	console.log(productIdCounter);
// 	    const reviewsArray = [ productIdCounter, reviewsCounter, faker.internet.userName(), helpers.getRandomInt(6), faker.random.words(), faker.lorem.paragraphs(), faker.date.past(), helpers.getRandomInt(1000), Math.random() < 0.5, faker.image.imageUrl()];
// 	    results.push(reviewsArray);
// 	    reviewsCounter += 1;
// 	    if (reviewsCounter % 10 === 0) {
// 	      productIdCounter += 1;
// 	    }
// 	  }

// 	  const didDrain = ws.write(JSON.stringify(results) + '\n');

//     if(!didDrain) {
//     ws.removeAllListeners('drain');
// 	  ws.on('drain', () => {
// 		  csv.write(results, {headers: false}).pipe(ws); 
// 		  return;     	
// 	  });

//     }

//     csv.write(results, {headers: false}).pipe(ws);      	
//     getData(i + 1, reviewsCounter);
//     return;
// 	}

// getData();


// csv.write(results, {headers: false}).pipe(ws);      	


// recurse 10 times

// for(var 10000000)
// str += ${faker.name}, ${asdfsdf}


// appendFile
var recursionSize = 100;
var chunkSize = 100000;

var generateData = function (size) {
  if(size === recursionSize) {
    return;    
  }
  var reviewsString = '';
  for(var i = 0; i < chunkSize; i++) {
	  reviewsString += `${productIdCounter}, ${reviewsCounter}, ${faker.internet.userName()}, ${helpers.getRandomInt(6)}, ${faker.random.words()}, "${faker.lorem.paragraphs()}", ${faker.date.past()}, ${helpers.getRandomInt(1000)}, ${Math.random() < 0.5}, ${faker.image.imageUrl()}` + '\n';
    reviewsCounter += 1;
    if (reviewsCounter % 10 === 0) {
      productIdCounter += 1;
    }	
  }
  
  fs.appendFile('data.csv', reviewsString, (err) => {
	  if (err) { 
	  	console.log(err); 
	  } else {
	    generateData(size + 1);
	    console.log(`successfully appended the first ${(size+1)*chunkSize}`);
	  }  
  });
}

generateData(0);

// productId,reviewId,username,stars,title,text,timestamp,numHelpful,verifiedPurchase,imageUrl
// productId, reviewId, username, stars, title, text, timestamp, numHelpful, verifiedPurchase, imageUrl


