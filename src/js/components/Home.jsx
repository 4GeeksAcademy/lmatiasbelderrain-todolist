import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [lista,setLista]=useState(["ordenar el cuarto","lavarse los dientes","estudiar"])
	const [tarea,setTarea]=useState("")
	
const agregarTarea=(e)=>{
	if (tarea==""){
		alert("No se ingreso tarea")
	}else {
		setLista([...lista,tarea])
setTarea("")
	}
}
	return (
		<div className="text-center container">
			<h1>To Do List</h1>
			<div className="d-flex justify-content-center m-3">


				<input
					className="form-control"
					type="text"
					value={tarea}
					onChange={(e)=>setTarea(e.target.value)}
				/>
				<button
					className="btn btn-success"
					onClick={(e)=>agregarTarea(e)}
				>
					Agregar Tarea
				</button>
			</div>
			<ul className="list-group">
				{lista.map((item,id)=>(
					<li className="list-group-item" key={id}>
						{item}
						<button className="btn btn-outline-danger float-end">X</button>
						</li>
				))}
			</ul>
			<h4 className="mt-2">Tareas Pendientes: {lista.length}</h4>
		</div>

	);
};

export default Home;