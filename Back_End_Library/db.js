import { MongoClient } from "mongodb";

// url del database
const url = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(url);

let db;

// funzione per collegarsi al DB. Da output sulla console quando riesce a connettersi
export default async function connectDB(){
    if(!db){
        await client.connect();
        console.log("connected to MongoDB");
        db = client.db("Library");
    }
    return db;
}