import Button from 'react-bootstrap/Button';

function Book({bookP})
{
    return (
        <section>
            <title>{bookP.title}</title>
            <h2>{bookP.author}</h2>
            <Button>Dettagli</Button>
        </section>
    )
}

export default Book;