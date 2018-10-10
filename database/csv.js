var faker = require('faker');
var helpers = require('../server/helpers/helpers.js');
var fs = require('fs');

// 			 CREATE TABLE products (
//       productId int,
//       reviewId int
//       );

// 			 CREATE TABLE reviews3 (
//       reviewId serial PRIMARY KEY,
//       username text,
//       stars int,
//       title text,
//       text text,
//       timestamp text,
//       numHelpful int,
//       verifiedPurchase boolean,
//       imageUrl text
//       );

var paragraphs = ['Voluptate debitis consequatur soluta.', 

'Dolor cupiditate distinctio rerum.',
 
'Laudantium cupiditate qui accusamus.',
 
'Maxime non vel quasi voluptatem.',
 
'Dolorum ut expedita quasi.',
 
'Voluptate ex quia nihil facere.',

'Voluptatem nemo est et.',
 
'Natus omnis distinctio.',
 
'Non omnis blanditiis eaque.',
 
'Et ut inventore sint.',
 
'Ut eum tempora quae.',
 
'Est quia non voluptas quo.',
 
'Numquam veritatis fugiat cum.',
 
'Consectetur possimus.',
 
'Neque voluptas ipsa explicabo.',
 
'Totam labore magnam possimus a.',
 
'Deserunt esse officiis ipsam.',
 
'Quibusdam sit ipsa sint eum.',
 
'Ut tempora quaerat.',
 
'Eos eos doloribus corrupti.',
 
'Consequatur consequatur.',
 
'Consequatur occaecati.',
 
'Voluptas sit perspiciatis.',
 
'Voluptas facere voluptatem.'];
var images = [];
var user = [];
var words = [];
var date = [];

for(var i = 0; i < 30; i++) {
  images.push(faker.image.imageUrl());
	user.push(faker.internet.userName());
	words.push(faker.random.words());
	date.push(faker.date.past());
}
  // var filename = 'postgres.csv'
  // fs.appendFile(filename, 'productId,reviewId,username,stars,title,text,timestamp,numHelpful,verifiedPurchase,imageUrl ' + '\n', (err) => {
  // 	if(err) {
  // 		console.log(err)
  // 	} else {
  // 		generateData(0);
  // 	}
  // });

// var recursionSize = 10;
// var chunkSize = 10000;
// var generateData = function (size) {
//   if(size === recursionSize) {
//     return;    
//   }
// 	  var reviewsString = '';
// 	  for(var i = 0; i < chunkSize; i++) {
// 		  reviewsString += `${productIdCounter},${reviewsCounter},${user[helpers.getRandomInt(30)]},${helpers.getRandomInt(6)},${words[helpers.getRandomInt(30)]},"${paragraphs[helpers.getRandomInt(24)]}",${date[helpers.getRandomInt(30)]},${helpers.getRandomInt(1000)},${Math.random() < 0.5},${images[helpers.getRandomInt(30)]}` + '\n';
// 	    reviewsCounter += 1;
// 	    if (reviewsCounter % 6 === 0) {
// 	      productIdCounter += 1;
// 	    }	
// 	  }
	  
// 	  fs.appendFile(filename, reviewsString, (err) => {
// 		  if (err) { 
// 		  	console.log(err); 
// 		  } else {
// 		    generateData(size + 1);
// 		    console.log(`successfully appended the first ${(size+1)*chunkSize}`);
// 		  }  
// 	  });
// }

var filename = 'postgres1.csv'
  
var recursionSize = 1000;
var chunkSize = 10000;

var productIdCounter = 1;
var reviewsCounter = 0;


var generateData = function (size) {
  if(size === recursionSize) {
    return;    
  }
	  var reviewsString = '';
	  for(var i = 0; i < chunkSize; i++) {
		  reviewsString += `${productIdCounter},${reviewsCounter},${user[helpers.getRandomInt(40)]},${helpers.getRandomInt(6)},${words[helpers.getRandomInt(40)]},"${paragraphs[helpers.getRandomInt(24)]}",${date[helpers.getRandomInt(40)]},${helpers.getRandomInt(1000)},${Math.random() < 0.5},${images[helpers.getRandomInt(40)]}` + '\n';
	    reviewsCounter += 1;
	    if (reviewsCounter % 5 === 0) {
	      productIdCounter += 1;
	    }	
	  }
	  
	  fs.appendFile(filename, reviewsString, (err) => {
		  if (err) { 
		  	console.log(err); 
		  } else {
		    generateData(size + 1);
		    console.log(`successfully appended the first ${(size+1)*chunkSize}`);
		  }  
	  });
}

// fs.appendFile(filename, 'productId,reviewId,username,stars,title,text,timestamp,numHelpful,verifiedPurchase,imageUrl ' + '\n', (err) => {
//   	if(err) {
//   		console.log(err)
//   	} else {
//   		generateData(0);
//   	}
//   });

// productIdCounter = 2000001;
// reviewsCounter = 10000000;
// filename = 'postgres2.csv'

// fs.appendFile(filename, 'productId,reviewId,username,stars,title,text,timestamp,numHelpful,verifiedPurchase,imageUrl ' + '\n', (err) => {
//   	if(err) {
//   		console.log(err)
//   	} else {
//   		generateData(0);
//   	}
//   });

// productIdCounter = 4000001;
// reviewsCounter = 20000000;
// filename = 'postgres3.csv'


// fs.appendFile(filename, 'productId,reviewId,username,stars,title,text,timestamp,numHelpful,verifiedPurchase,imageUrl ' + '\n', (err) => {
//   	if(err) {
//   		console.log(err)
//   	} else {
//   		generateData(0);
//   	}
//   });

// productIdCounter = 6000001;
// reviewsCounter = 30000000;
// filename = 'postgres4.csv'

// fs.appendFile(filename, 'productId,reviewId,username,stars,title,text,timestamp,numHelpful,verifiedPurchase,imageUrl ' + '\n', (err) => {
//   	if(err) {
//   		console.log(err)
//   	} else {
//   		generateData(0);
//   	}
//   });

productIdCounter = 8000001;
reviewsCounter = 40000000;
filename = 'postgres5.csv'

fs.appendFile(filename, 'productId,reviewId,username,stars,title,text,timestamp,numHelpful,verifiedPurchase,imageUrl ' + '\n', (err) => {
  	if(err) {
  		console.log(err)
  	} else {
  		generateData(0);
  	}
  });

// productId,reviewId,username,stars,title,text,timestamp,numHelpful,verifiedPurchase,imageUrl
