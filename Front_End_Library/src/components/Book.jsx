import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Book({bookP})
{
    return (
        <Card 
            sx={{ minWidth: 275, minHeight: 550 }}
            key={bookP.id}
        >
            <CardContent>
                <CardMedia
                    image={bookP.img}
                    alt={bookP.title}

                    sx={{   
                            minHeight: 300, 
                            height: 650,
                            width: 1,
                    }}
                />
                <Typography gutterBottom variant="h5" component="div">
                    {bookP.title}
                </Typography>
                <Typography gutterBottom variant="h6">
                    {bookP.author}
                </Typography>
                <Typography gutterBottom variant="body1">
                    {bookP.release} <br /> {""}
                    {bookP.genre}   <br /> {""}
                    {bookP.ISBN}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Book;