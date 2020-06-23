const esClient = require('./client');

esClient.indices.delete({index: 'gov'},function(err,resp,status) {  
    console.log("delete",resp);
  });
  