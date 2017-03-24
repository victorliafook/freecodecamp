var mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';

var findAge = parseInt(process.argv[2]);
mongo.connect(url, function(err, db) {
    if(err){
        console.log(err);
        throw err;
    }
    var parrots = db.collection('parrots');
    parrots.find({
      age: {$gt: findAge}
    }).toArray(function(error, documents) {
        error ? console.log(error) : console.log(documents);
    })
    db.close();
    
});