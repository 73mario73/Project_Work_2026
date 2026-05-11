import { useState, useEffect } from "react";
import axios from "axios";

import Book from './Book.jsx';

function Books(){
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
            {
               books.length > 0 ?  (books.map((book) => (
                <Book key={book.id} bookP={book}/>
               ))) : ( <p>Al momento non ci sono libri nel catalogo.</p> )
            }
        </>
    )
}

export default Books;
