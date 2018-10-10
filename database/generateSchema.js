var fs = require('fs');


for(var i = 1; i < 101; i++) {
  var string = `CREATE INDEX index_${i} ON product_${i} (productid);` + '\n' + '\n' 

  fs.appendFile('database/schema.sql', string, (err) => {
  	if(err) {
  		console.log(err)
  	}
  });
  
}

// for(var i = 1; i < 101; i++) {
//   var string = `CREATE TABLE product_${i} PARTITION OF master
//     FOR VALUES FROM ('${1+((i-1)*100000)}') TO ('${(i*100000) + 1}');` + '\n' + '\n' 

//   fs.appendFile('database/schema.sql', string, (err) => {
//   	if(err) {
//   		console.log(err)
//   	}
//   });
  
// }


