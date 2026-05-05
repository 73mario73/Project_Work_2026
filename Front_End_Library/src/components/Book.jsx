import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Book({bookP})
{
    return (
        <section>
            <Card.Header>{bookP.title}</Card.Header>
            <Card.Subtitle>{bookP.author}</Card.Subtitle>
            <Button>Dettagli</Button>
            <p>{bookP.genre}</p>
        </section>
    )
}

export default Book;