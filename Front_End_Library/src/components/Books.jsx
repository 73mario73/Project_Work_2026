import { useState, useEffect } from "react";
import axios from "axios";

import Book from './Book.jsx';
import Grid from "@mui/material/Grid";

function Books(){//{researchP}
    console.log("Books()");

    const [books, setBooks] = useState([]);
    const [refresh, setRefresh] = useState(0);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);
    
    useEffect(() => {
        async function fetchPosts()
        {
            try
            {
                setLoading(true);

                const response = await axios.get("http://localhost:3000/books");

                console.log(response.data);

                setBooks(response.data);
                //setLoading(false);
            }
            catch(e)
            {
                console.log(e);
                //setLoading(false);
                setErr(e);
            }
            finally
            {
                setLoading(false);
            }
        }

        fetchPosts();
    }, [refresh]);

    function onRefresh() {
        setRefresh(refresh + 1);
    }

    if(loading)
        return <p>Loading...</p>
    
    if(err)
        return <p>{err.message}</p>

    return (
        <>
        <button onClick={onRefresh}>Refresh</button> {/*andrebbe messo in modo sensato tipo dopo inserimento*/}
            <Grid 
                container 
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                direction= "row"
                sx= {{justifyContent: "center", alignItems: "flex-start"}}
            >
                {
                books.length > 0 ?  (books.map((book) => (
                    <Grid
                        key={books.id}
                        size= {{xs: 2, sm: 3, md: 3}}
                        sx= {{boxShadow: 1}}
                    >
                        <Book key={book.id} bookP={book}/>  
                    </Grid>
                ))) : ( <p>Al momento non ci sono libri nel catalogo.</p> )
                }
            </Grid>
        </>
    )
}

export default Books;