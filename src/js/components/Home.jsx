import React, { useState } from "react";

const Home = () => {

	//useState() // retorna un array [variable, funcion]
	// [nombre de la variable, funcion que modifica la variable] = useState(valor inicial)

	const [count, setCount] = useState(0)
	const [record, setRecord] = useState(0)

	console.log('se renderizo el componente')
	let contador = 10

	function add(){
		console.log('add')
		console.log(contador)
		contador++;
		// count = 7
		// setCount( count++)
		// setCount( x) ====> count = x
		// count++ =====> count = count  + 1
		// setCount(count++) ====> count = count++
		// setCount(count++) ====> count = count = count  + 1
		setCount( count + 1)
		setRecord( record +1 )
		console.log(contador)
	}

	function remove(){
		console.log('remove')
		setCount(count - 1)
		setRecord(record +1 )
	}


	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Bienvenidos a React HOOKS! 🪝</h1>
			<button onClick={()=>{
				setCount(count - 1)
				setRecord(record +1 )
			}}>Quitar</button>
			<p> contador: {contador}</p>
			<p> count: {count}</p>
			<button onClick={add}>Agregar</button>
			<p>utilizaste la app {record} PAGA</p>
		</div>
	);
};

export default Home;