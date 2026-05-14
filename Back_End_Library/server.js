import express from "express";
import cors from 'cors';
import connectDB from "./db.js";

// Porta del Backend
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

let db;

// Funzione per ottenere i libri nel db. Filtri esistenti ai seguenti link:
// http://localhost:3000/books/?title=<titolo> : cerca filtrando per parole nel titolo
// http://localhost:3000/books/?author=<autore> : cerca filtrando per parole nell'autore
// possono essere concatenate
app.get("/books", async (req, res, next)=>{
    try{
        // presa della collection dal db
        const booksCollection= db.collection("Library");
        const filter={};

        // Query per titolo
        if(req.query.title){
            const titles = req.query.title.split(",");

            filter.title = {$in: titles.map((title) => new RegExp(`^${title}$`, "i"))};
        }

        // Query per autore
        if(req.query.author){
            const authors = req.query.author.split(",");

            filter.author = {$in: authors.map((author) => new RegExp(`^${author}$`, "i"))};
        }
        
        //Output in stile json degli elementi nella collezione, con eventuale filtro applicato
        const books = await booksCollection.find(filter).toArray();
        res.json(books);
    }catch(err){
        next(err);
    }
});

// Funzione per ottenere i libri nel db filtrando per parole che potrebbero essere sia nel campo autore che titolo.
// Link per cercare: http://localhost:3000/books/search/<Campo di ricerca>
app.get("/books/search/:text", async (req, res, next)=>{
    try{
        console.log("Searching database")
        const booksCollection= db.collection("Library");
        const searchTxt = req.params.text;
        
        //Creazione del filtro, utilizzo di un $or nella regEx per cercare in maniera indipendente in titolo e autore
        const results = await booksCollection.find({
            $or: [
                { title: { $regex: searchTxt, $options: "i"}},
                { author: { $regex: searchTxt, $options: "i"}},
                { ISBN: { $regex: searchTxt, $options: "i"}},
                { genre: { $regex: searchTxt, $options: "i"}},
            ]
        }).toArray();

        console.log(searchTxt)
        res.json(results);
    }catch(err){
        next(err);
    }
});

// Richiamo da db.js della funzione connectDB(). Nel caso non riesca a connettersi, da errore.
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