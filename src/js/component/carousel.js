import React from "react";
import { Link } from "react-router-dom";
import { CardPlanet } from "./cardPlanet";

export const Carousel = () => {
	return (

		<div className="container">

			<h1 className="text-danger m-5"><strong>Characters</strong></h1>

			<div className="m-5">
				<div id="carouselExampleControls" className="carousel carousel-dark slide bg-light" data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							
							

						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	)


};













