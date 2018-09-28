var faker = require('faker');
var helpers = require('../server/helpers/helpers.js');
var fs = require('fs');

var csv = require('fast-csv');

var ws = fs.createWriteStream('data.csv');


var productIdCounter = 1;
var reviewsCounter = 0;
var id = 1;

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

      // CREATE TABLE reviews2 (
      // id serial PRIMARY KEY,
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

var paragraphs = ['Voluptate debitis consequatur soluta. Molestiae dolorem fugit quia recusandae ut vel ipsum doloremque. Facilis voluptatem dolor quis asperiores minus fuga aliquid. Qui suscipit rerum sequi voluptas enim dolorum. Animi impedit reiciendis deserunt et assumenda est quam.', 

'Dolor cupiditate distinctio rerum. Ipsa explicabo impedit. Doloribus debitis dolore mollitia magnam.',
 
'Laudantium cupiditate qui accusamus. Excepturi eos officia necessitatibus et saepe. Possimus laudantium beatae quaerat repellendus modi enim incidunt debitis. Sunt sed vel. Quos in omnis expedita et. Et reprehenderit ex consectetur autem consequatur omnis cum optio beatae.,Et iste qui. Voluptatem dolor rerum ipsum mollitia nulla rem. Molestiae dolores vel magnam. Ipsa sed omnis. Minus velit recusandae quo et iusto aperiam sit consectetur mollitia. Nostrum dolore consequatur dolor.',
 
'Maxime non vel quasi voluptatem. In et vero eos qui voluptatem rerum laborum corrupti. Suscipit eum cupiditate perspiciatis consequuntur consequuntur laborum beatae totam officiis. Enim impedit accusantium earum autem.',
 
'Dolorum ut expedita quasi laborum aut sint aliquid. Provident itaque ut reiciendis suscipit at autem autem quia. Iusto commodi provident quod mollitia sed dicta consequatur.,Occaecati velit fugit soluta inventore sint iusto reiciendis. Laboriosam quia aut accusantium laboriosam autem. Ipsum quo officia eos error.',
 
'Voluptate ex quia nihil facere. Quia et laboriosam. Molestias libero provident quia quas perspiciatis qui.',

'Voluptatem nemo est et. Excepturi soluta est dolore debitis odio praesentium est. Quisquam animi ut est in laudantium rerum. Rerum sunt quo ipsam ad. Voluptatum sed similique enim inventore id quisquam. Necessitatibus numquam sit ratione tempora quia.,Dolores unde ratione. Perspiciatis et non qui ut a quia voluptatem ratione ut. Sint eius repellat officiis est numquam perferendis nostrum. Accusantium delectus soluta ut pariatur. Adipisci ut autem minima molestiae. Labore harum et.',
 
'Natus omnis distinctio provident provident porro consequatur qui et. Molestiae possimus fuga harum quaerat aut impedit aut provident. Veritatis ipsum fugit et suscipit quos odio. Eum quia numquam dignissimos est nihil iusto vitae qui aut. Magnam numquam magni et laborum. Beatae aut id mollitia temporibus cumque in ut.',
 
'Non omnis blanditiis eaque amet in enim sapiente labore. Fuga aspernatur omnis dolorem sapiente suscipit quibusdam praesentium corrupti maiores. Quisquam qui vel dolores voluptate numquam dolores reiciendis quos. Quisquam vitae inventore rerum perspiciatis iure rerum.,Cupiditate ipsam hic autem laboriosam maiores impedit aperiam neque et. Porro eveniet similique delectus qui non. Cupiditate consectetur voluptatem libero. Id quidem veritatis quia odit a inventore. Similique quod sunt. Aspernatur quod ut dolor numquam qui eum reprehenderit dolorem ducimus.',
 
'Et ut inventore sint. Voluptatem possimus qui dolores rerum doloremque deserunt modi magnam. Tempore vel temporibus aut et recusandae quod deleniti dolore. Eos enim voluptas eligendi delectus soluta magni quia non doloribus. Et consequuntur eius blanditiis ut aut.',
 
'Ut eum tempora quae. Incidunt officia aut et aspernatur unde. Saepe sunt doloribus dicta ipsa temporibus molestiae. Aut ut optio cumque temporibus amet accusantium nemo repellendus et.,At nulla sed. Ut quia voluptas sit quidem placeat ipsum sed accusantium distinctio. Voluptas inventore ut ipsam exercitationem recusandae qui eligendi placeat ipsa. Adipisci aperiam cumque eligendi a. Omnis corrupti ipsa accusantium officiis beatae labore rem. Adipisci fugit totam aut ullam consequatur ut.',
 
'Est quia non voluptas quo voluptates est. Magni maxime aut nostrum quibusdam blanditiis non officiis repellendus. Adipisci aut aut at qui atque id voluptas. Inventore qui in nulla qui ipsum illo unde.',
 
'Numquam veritatis fugiat cum sapiente ut. Dolores ducimus laboriosam. Et facilis saepe nihil ut eum autem quia occaecati ut. Repudiandae voluptate accusamus delectus eum aut et. Vel aspernatur possimus repellendus aliquam.,Aut ab odit non. Ut aut et officiis ratione ea. Laborum asperiores consequatur facilis laboriosam ab tempore sint omnis. Voluptatem aspernatur quia aut sunt aut doloremque adipisci id esse. Quo libero dolores saepe qui.',
 
'Consectetur possimus voluptatibus porro aut nulla sed. Ea aut quo nostrum consequatur. Rerum atque ipsa possimus velit voluptas neque hic animi natus. Corrupti saepe culpa odit voluptatem sint expedita quaerat.',
 
'Neque voluptas ipsa explicabo quos reiciendis aperiam illo quis facilis. Voluptas hic veritatis placeat dignissimos eum. Nihil inventore distinctio exercitationem.,Atque quibusdam nostrum veniam. Et esse quia et eum accusamus alias eligendi. Sed assumenda suscipit expedita omnis et libero tenetur. Quis et veritatis totam aut qui. Amet sed voluptas animi minima sed temporibus.',
 
'Totam labore magnam possimus a. Rem odio voluptas velit cumque. Est et eos ratione ut tempore necessitatibus velit dolores culpa. Et velit voluptas eaque consectetur autem est.',
 
'Deserunt esse officiis ipsam. Exercitationem ab nostrum dolores voluptas. Minus commodi est sed et qui ad autem.,Dolorem aut dolores quis ad cum nemo saepe nemo eum. Modi culpa vitae fuga enim eius autem mollitia deserunt assumenda. Possimus necessitatibus esse illum est nisi voluptas nihil. Eligendi sit ratione omnis ipsam consequatur. Ut est dolor vel expedita et ut error hic nulla. Veritatis cupiditate explicabo odio eaque accusantium quae eos.',
 
'Quibusdam sit ipsa sint eum repellendus quia dolores blanditiis. Dolores et possimus sunt et beatae porro in. Aut vitae aut porro qui quia minus officia est. Sit voluptate repellendus itaque ratione labore excepturi.',
 
'Ut tempora quaerat. At voluptatem porro non doloremque repudiandae consequatur earum molestiae. Quos beatae adipisci odit saepe est delectus et rerum odit. Ab iste fuga ut dolorem qui consequatur dolor doloremque autem. Iste ea error consectetur alias consequuntur.,Et enim officiis explicabo nemo quo ut. Quaerat et eligendi fugit ut placeat. Enim autem quisquam cumque repellat quis quia quia ut consequatur. Voluptatem voluptatem optio quaerat pariatur. Sunt est maiores quo corporis nihil asperiores.',
 
'Eos eos doloribus corrupti saepe fuga eligendi illum et. Rerum cum ipsam sit doloribus et minus et hic. Voluptatibus aut expedita voluptatibus quas repudiandae. Nihil rerum natus aut earum sit.',
 
'Consequatur consequatur excepturi praesentium quibusdam ullam deserunt delectus eum. Ut cumque id ad ab sunt dolorum. Consequatur praesentium eveniet quae facilis autem. Nemo ipsa neque laborum provident voluptates iste. Ad perferendis non.,In autem sint. Cupiditate omnis consequatur error quis veritatis. Porro nihil esse soluta doloremque praesentium eaque eos blanditiis. Natus id totam dolore vitae eveniet in ullam voluptatum. Nam ipsa iste culpa nesciunt natus sint in nam.',
 
'Consequatur occaecati illum rem iure ducimus nostrum. Officia similique totam officiis cupiditate ut exercitationem sit fugit quis. Voluptate officia aut nihil culpa nesciunt.',
 
'Voluptas sit perspiciatis occaecati. Error aut odio ipsam. Rerum in aut totam. Laudantium est unde modi est aliquam. Omnis alias ex modi velit non quia.,Aut optio omnis harum aliquam doloremque ad enim ipsam. Voluptatem ut eius similique nisi assumenda praesentium corporis eos. At dolore ipsam vel neque et sunt enim. Non recusandae velit esse cumque minima reiciendis sed vero. Explicabo architecto ut sed ex.',
 
'Voluptas facere voluptatem assumenda. Dolorem et molestias. Praesentium modi consequuntur exercitationem ipsam nam ut laborum aut. Temporibus quaerat eius ut et voluptas unde ab. Deserunt ratione qui.'];
var images = [];
var user = [];
var words = [];
var date = [];

for(var i = 0; i < 40; i++) {
  images.push(faker.image.imageUrl());
	user.push(faker.internet.userName());
	words.push(faker.random.words());
	date.push(faker.date.past());
}
  var filename = 'primarydata.csv'
  fs.appendFile(filename, 'productId,reviewId,username,stars,title,text,timestamp,numHelpful,verifiedPurchase,imageUrl ' + '\n', (err) => {
  	if(err) {
  		console.log(err)
  	} else {
  		generateData(0);
  	}
  });

var recursionSize = 600;
var chunkSize = 100000;
var generateData = function (size) {
  if(size === recursionSize) {
    return;    
  }
	  var reviewsString = '';
	  for(var i = 0; i < chunkSize; i++) {
		  reviewsString += `${productIdCounter}, ${reviewsCounter}, ${user[helpers.getRandomInt(40)]}, ${helpers.getRandomInt(6)}, ${words[helpers.getRandomInt(40)]}, "${paragraphs[helpers.getRandomInt(24)]}", ${date[helpers.getRandomInt(40)]}, ${helpers.getRandomInt(1000)}, ${Math.random() < 0.5}, ${images[helpers.getRandomInt(40)]}` + '\n';
	    reviewsCounter += 1;
	    if (reviewsCounter % 6 === 0) {
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

// productId,reviewId,username,stars,title,text,timestamp,numHelpful,verifiedPurchase,imageUrl


