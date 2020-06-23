const esClient = require('./client');

esClient.count({index: 'gov',type: 'constituencies'},function(err,resp,status) {  
    console.log("constituencies",resp);
  });
  