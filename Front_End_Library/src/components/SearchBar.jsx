import { useState, useEffect } from "react";
import axios from "axios";

import { TextField, MenuItem } from "@mui/material";

function SearchBar({searchP, handleChange})
{
    const [research, setResearch] = useState("");
	const criteria = [{value: "author", label: "Autore"}, {value: "title", label: "Titolo"}, {value: "genre", label: "Genere"}, {value: "year", label: "Anno"}];

//devo fare funz che appena scrivo lettera suggerisce autori, titoli, etc=>cercare menu a tendina che esce + fare f che si collega a books

    return (
    <>
        <TextField 
            fullWidth 
            id="filled-basic" 
            label="Hai un nome in mente?"  // oppure placeholder?
            variant="standard"
            onChange={handleChange}
            color="success" 
		/>
    </>
    )
}

export default SearchBar;