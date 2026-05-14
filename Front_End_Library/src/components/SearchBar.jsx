import { useState, useEffect } from "react";
import axios from "axios";

import { TextField, MenuItem } from "@mui/material";

function SearchBar({searchP})
{
    const [research, setResearch] = useState("");
	const criteria = [{value: "author", label: "Autore"}, {value: "title", label: "Titolo"}, {value: "genre", label: "Genere"}, {value: "year", label: "Anno"}];

	function handleResearch(research) 
	{
		setResearch(research);
		console.log(research);
		//vorremmo che appena metto nuovo carattere cerca cose possibili con quello, quindi forse questa funzione va fatta da un'altra parte

	}
//devo fare funz che appena scrivo lettera suggerisce autori, titoli, etc=>cercare menu a tendina che esce + fare f che si collega a books

    return (
    <>
        <TextField 
            fullWidth 
            id="filled-basic" 
            label="Hai un nome in mente?"  // oppure placeholder?
            variant="standard"
            onChange={handleResearch}
            color="success" 
		/>
        <TextField
            id="standard-select-filter"
            select
            label="Select"
            defaultValue="title"
            //helperText="Please select your currency"
            variant="standard"
            color="success"
            sx={{width: '200px'}}
        >
            {criteria.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    </>
    )
}

export default SearchBar;