import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Provider } from "@/components/ui/provider"
import { Component } from 'Front_End_Library/node_modules/@chakra-ui/react';
import {Card} from 'Front_End_Library/node_modules/@chakra-ui/react';


function Book({bookP})
{
    return (
        <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
            <Image
                objectFit="cover"
                maxW="200px"
                src=''
                alt={bookP.title}
            />
            <Card.Header />
            <Card.Body />
            <Card.Footer />
        </Card.Root>
    )
}

export default Book;

        {/* <section>
            <Card.Header>{bookP.title}</Card.Header>
            <Card.Subtitle>{bookP.author}</Card.Subtitle>
            <Button>Dettagli</Button>
            <p>{bookP.genre}</p>
        </section> */}