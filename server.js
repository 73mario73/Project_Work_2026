import express from "express";
import connectDB from "./db.js";

const PORT = 3000;
const app = express();

let db;

app.use(express.json());

app.get("/books", async (req, res, next)=>{
    try{
        const booksCollection= db.collection("Library");
        const filter={};
        
        const books = await booksCollection.find(filter).toArray();
        res.json(books);
    }catch(err){
        next(err);
    }
});

async function startServer(){
    try{
        db= await connectDB();

        app.listen(PORT, () =>{
            console.log(`server running on http://localhost:${PORT}`);
        });
    }catch(err){
        console.error("failed to start server. Code error:", err);
        process.exit(1);
    }
}

startServer();