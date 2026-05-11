import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Books from './components/Books.jsx';

function App() {
	const [count, setCount] = useState(0)

	return (
			<Books/>
	)
}

export default App
