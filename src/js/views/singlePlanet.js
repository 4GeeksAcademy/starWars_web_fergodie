import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const SinglePlanet = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();


	return (
		<div className="container d-flex align-items-center p-4">
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-6">
						<img className="img-fluid max-width: 100%" src="https://picsum.photos/500/300" alt="" />
						<div className="mt-3">
							<h1>Nombre apellido</h1>
							<p>Un señor elegante, con capa negra que come todo lo que encuentra, siempre deja caca suelta</p>
						</div>
					</div>
					<div className="col-md-6">
						<ul className="list-group">
							<li className="list-group-item"><strong>Name:</strong> Nombre del personaje</li>
							<li className="list-group-item"><strong>Birth Year:</strong> Año de nacimiento</li>
							<li className="list-group-item"><strong>Gender:</strong> Género</li>
							<li className="list-group-item"><strong>Height:</strong> Altura</li>
							<li className="list-group-item"><strong>Skin Color:</strong> Color de piel</li>
							<li className="list-group-item"><strong>Eye Color:</strong> Color de ojos</li>
						</ul>
					</div>
				</div>
			</div>


		</div>



	);





}
export default CardDetails;


