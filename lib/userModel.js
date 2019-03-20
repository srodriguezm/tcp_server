
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://isis:<infracom>@cluster0-dwmtk.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

var userSchema = db.Schema({
    firstname: String,
    lastname: String,
    password: {
        type: String,
        select: false
    },
    email: String
});

module.exports = db.model('User',userSchema);