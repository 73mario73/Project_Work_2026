import { useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';
import Books from './components/Books.jsx';
import SearchBar from './components/SearchBar.jsx';

function App() {
	//const [count, setCount] = useState(0)
	const [research, setResearch] = useState("");
	const criteria = [{value: "author", label: "Autore"}, {value: "title", label: "Titolo"}, {value: "genre", label: "Genere"}, {value: "year", label: "Anno"}];
	const [sb, setSb] = useState({})

	return (
		<div>
			<Box
				component="form"
				sx={{ '& > :not(style)': { m: 1, width: '200', maxWidth: '60%' }}} // sx={{ '& .MuiTextField-root': 
				noValidate
				autoComplete="off" 
			>
				<SearchBar searchBarP={sb}/>
			</Box>

			<Books/> {/*searchQuery={research} */}
		</div>
	)
}
export default App;


