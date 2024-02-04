import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">

			<h1 className="text-danger m-5"><strong>Characters</strong></h1>

			<div className="m-5">
				<div id="carouselExampleControls" className="carousel carousel-dark slide bg-light" data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="card-wrapper d-flex">
								<div className="card m-5" style={{ width: `18rem` }}>
									<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
								<div className="card m-5" style={{ width: `18rem` }}>
									<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
								<div className="card m-5" style={{ width: `18rem` }}>
									<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
							</div>

						</div>
						<div className="carousel-item">
							<div className="card-wrapper d-flex">
								<div className="card m-5" style={{ width: `18rem` }}>
									<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
								<div className="card m-5" style={{ width: `18rem` }}>
									<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
								<div className="card m-5" style={{ width: `18rem` }}>
									<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<div className="card-wrapper d-flex">
								<div className="card m-5" style={{ width: `18rem` }}>
									<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
								<div className="card m-5" style={{ width: `18rem` }}>
									<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
								<div className="card m-5" style={{ width: `18rem` }}>
									<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
							</div>
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

			<h1 className="text-danger m-5"><strong>Planets</strong></h1>

			<div className="m-5">
				<div id="carouselExampleControls2" className="carousel slide bg-light" data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="card-wrapper d-flex">
								<div className="card m-5" style={{ width: `18rem` }}>
									<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
								<div className="card m-5" style={{ width: `18rem` }}>
									<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
								<div className="card m-5" style={{ width: `18rem` }}>
									<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
							</div>

						</div>
						<div className="carousel-item">
							<div className="card-wrapper d-flex">
								<div className="card m-5" style={{ width: `18rem` }}>
									<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
								<div className="card m-5" style={{ width: `18rem` }}>
									<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
								<div className="card m-5" style={{ width: `18rem` }}>
									<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<div className="card-wrapper d-flex">
								<div className="card m-5" style={{ width: `18rem` }}>
									<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
								<div className="card m-5" style={{ width: `18rem` }}>
									<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
								<div className="card m-5" style={{ width: `18rem` }}>
									<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>

		</div>

	);
};
