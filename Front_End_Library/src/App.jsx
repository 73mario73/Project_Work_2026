import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Books from './components/Books';

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<h>Header del sito della biblioteca</h>
			<Books/>
		</>
	)
}

export default App
