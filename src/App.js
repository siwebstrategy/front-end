import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import  Pipe  from './Pipe';

function App() {

	const [pipes, setPipes] = useState([]);

	useEffect(() => {
		getPipes();
	}, []);

	const getPipes = async () => {
		const response = await fetch(
			"http://localhost:5000/pipes", {mode:'cors'}
		);
		const data = await response.json();
		setPipes(data);
	}


  return (
    <div className="App">
			<h1>Look at all these pipes!</h1>
			{pipes.map(pipe => (
				<Pipe /> 
			))}
		</div>
  );
}

export default App;
