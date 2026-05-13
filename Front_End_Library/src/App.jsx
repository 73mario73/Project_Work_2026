import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import Books from './components/Books.jsx';

function App() {
	//const [count, setCount] = useState(0)
	const [research, setResearch] = useState("");

	function handleResearch(research) 
	{
		setResearch(research);
		//vorremmo che appena metto nuovo carattere cerca cose possibili con quello, quindi forse questa funzione va fatta da un'altra parte
	}
	
	return (
		<div>
			<Box
				component="form"
				sx={{ '& > :not(style)': { m: 1, width: '200', maxWidth: '60%' }}}
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
			</Box>

			<Books/> {/*searchQuery={research} */}
		</div>
	)
}
export default App;
