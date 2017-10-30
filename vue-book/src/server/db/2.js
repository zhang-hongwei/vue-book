let fs = require('fs');


fs.readFile('./books.json','utf-8',function(err,data){

  if(err){console.log(err)}else{console.log(data.length)}

})