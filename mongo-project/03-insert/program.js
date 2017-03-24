var mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';

var firstName = process.argv[2];
var lastName = process.argv[3];

var insertObj = {firstName: firstName, lastName: lastName};

mongo.connect(url, function(err, db) {
    if(err){
        console.log(err);
        throw err;
    }
    var docs = db.collection('docs');
    docs.insert(insertObj, function(err, data){
        if(err) throw err;
        console.log(JSON.stringify(insertObj));
    });
    
    db.close();
    
});