import express from "express";

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/books", async (req, res, next)=>{
    try{
        const books = [{name:'Ciccio'}];
        res.json(books);
    }catch(err){
        next(err);
    }
});

async function startServer(){
    try{
        app.listen(PORT, () =>{
            console.log(`server running on http://localhost:${PORT}`);
        });
    }catch(err){
        console.error("failed to start server. Code error:", err);
        process.exit(1);
    }
}

startServer();