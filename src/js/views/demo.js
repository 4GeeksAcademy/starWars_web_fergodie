import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { CardPlanet } from "../component/cardPlanet";
import { CardCharacter } from "../component/cardCharacter";
import { CardVehicle } from "../component/cardVehicle";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container">

				<h1 className="text-danger m-5"><strong>Characters</strong></h1>

				<div className="m-5">
					<div id="carouselCharacters" className="carousel carousel-dark slide bg-light" data-bs-ride="carousel">
						<div className="carousel-inner">

							{store.characters.map((character, index) => (
								<div className={"carousel-item p-5 " + (index == 0 ? "active" : "")}>
									<CardCharacter character={character} index={index} />
								</div>
							)
							)}



						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselCharacters" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselCharacters" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>

			<div className="container">

				<h1 className="text-danger m-5"><strong>Planets</strong></h1>

				<div className="m-5">
					<div id="carouselPlanets" className="carousel carousel-dark slide bg-light" data-bs-ride="carousel">
						<div className="carousel-inner">



							{store.planets.map((planet, index) => (
								<div className={"carousel-item p-5 " + (index == 0 ? "active" : "")}>
									<CardPlanet planet={planet} index={index} />
								</div>
							)
							)}





						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselPlanets" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselPlanets" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>

			<div className="container">

				<h1 className="text-danger m-5"><strong>Vehicles</strong></h1>

				<div className="m-5">
					<div id="carouselVehicles" className="carousel carousel-dark slide bg-light" data-bs-ride="carousel">
						<div className="carousel-inner">


							{store.vehicles.map((vehicle, index) => (
								<div className={"carousel-item p-5 " + (index == 0 ? "active" : "")}>
									<CardVehicle vehicle={vehicle} index={index} />
								</div>
							)
							)}


						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselVehicles" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselVehicles" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>

		</>
	);
};
