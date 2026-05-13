import { useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';
import Books from './components/Books.jsx';

function App() {
	//const [count, setCount] = useState(0)
	const [research, setResearch] = useState("");
	const criteria = [{value: "author", label: "Autore"}, {value: "title", label: "Titolo"}, {value: "genre", label: "Genere"}, {value: "year", label: "Anno"}];

	function handleResearch(research) 
	{
		setResearch(research);
		//vorremmo che appena metto nuovo carattere cerca cose possibili con quello, quindi forse questa funzione va fatta da un'altra parte
	}
	
	return (
		<div>
			<Box
				component="form"
				sx={{ '& > :not(style)': { m: 1, width: '200', maxWidth: '60%' }}} // sx={{ '& .MuiTextField-root': 
				noValidate
				autoComplete="off" 
			>
				<TextField 
					fullWidth 
					id="filled-basic" 
					label="Hai un nome in mente?"  // oppure placeholder?
					variant="standard" 
					researchP={research}
					onResearch={handleResearch}
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
			</Box>

			<Books/> {/*searchQuery={research} */}
		</div>
	)
}
export default App;


