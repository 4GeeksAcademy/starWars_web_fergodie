import React from "react";
import { Link } from "react-router-dom";

export const CardPlanet = (props) => {
	fetch(props.url)
	.then()
	.catch()
	
	return (

		<div className="card m-5" style={{ width: `18rem` }}>
			<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
		</div>


	)
}