const mongoClient = require('mongodb').MongoClient

const url = "mongodb://127.0.0.1:27017"

let client;

//connecting to mongo db

const dbConnect = async () =>{
    client = await mongoClient.connect(url, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
}


//connecting to a database

const getConnect = (name) => {
    const database = client.db(name)
    return database
}


module.exports = {
    dbConnect,
    getConnect,
}
