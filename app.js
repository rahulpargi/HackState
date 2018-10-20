var credentials = require('./api-keys').twitterKeys;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/hackstate";
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');
var db = mongoose.connection;


var StreamTweets=require('stream-tweets')
var st = new StreamTweets(credentials,false);



MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("hackstate");
    st.stream('computer science,python,computer programming,mechanical engg,electrical engg,civil,engg,Accounting & Finance,Anthropology,Business & Management Studies,Communication & Media Studies,Development Studies,Economics & Econometrics,Education & Training,Hospitality & Leisure Management,Law,Library & Information Management,Social Policy & Administration,Sociology,Sports-related Subjects,tatistics & Operational Research', function(results){
        console.log(results);
        dbo.collection("data").insertOne(results, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            //db.close();
          }); 
    });
    
   
  });
  
