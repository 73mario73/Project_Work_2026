import express from "express";
import cors from 'cors';
import connectDB from "./db.js";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

let db;

app.get("/books", async (req, res, next)=>{
    try{
        const booksCollection= db.collection("Library");
        const filter={};

        if(req.query.title){
            const titles = req.query.title.split(",");

            filter.title = {$in: titles.map((title) => new RegExp(`^${title}$`, "i"))};
        }

        if(req.query.author){
            const authors = req.query.author.split(",");

            filter.author = {$in: authors.map((author) => new RegExp(`^${author}$`, "i"))};
        }
        
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