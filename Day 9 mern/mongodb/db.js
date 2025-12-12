const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let database;

async function getDataBase() {
    if (database) return database;  // reuse existing connection

    const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
    database = client.db('bookdemo1');

    return database;
}

module.exports = { getDataBase };
