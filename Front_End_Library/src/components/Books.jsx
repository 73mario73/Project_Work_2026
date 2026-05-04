//import from react-bootstrap/;
import axios from 'axios';
import { useState, useEffect } from 'react';
import Book from './Book.jsx';

function Books()
{
    const [err, setErr] = useState(null);
    //io qua ora devo recuperare il db 
    useEffect( () => //usa effetto di
    {
        async function fetchBooks() //funzione asincrona di fetch dati: funxione in cui vado a recuperare
        {
            try 
            {
                const response = await axios.get();
            }
            catch(err)
            {
                setErr(err);
            }


        }

    })

    if(err)
    {
        return <p>{err.message}</p>
    }

    return(
        <section>
            {
               Books.length > 0 ?  (Books.map((book) => (
                <Book key={book.id} bookP={book}/>
               ))) : ( <p>Al momento non ci sono libri nel catalogo.</p> )
            }
        </section>
    )
}

export default Books;