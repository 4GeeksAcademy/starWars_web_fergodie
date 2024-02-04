import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 p-3">
			<Link to="/">
				<img
					src="https://cronkitenews.azpbs.org/wp-content/uploads/2021/07/navajo-star-wars-logo.png"
					alt="Star Wars Logo"
					width="75"
					height="40"
					className="d-inline-block align-top"
				/>
			</Link>
			<div className="ml-auto">
				<div className="btn-group">
					<button
						type="button"
						className="btn btn-primary dropdown-toggle"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Favoritos
					</button>
					<div className="dropdown-menu">
						<Link to="/favoritos" className="dropdown-item">
							Favorito 1
						</Link>
						<Link to="/favoritos" className="dropdown-item">
							Favorito 2
						</Link>
						 
					</div>
				</div>
			</div>
		</nav>
	);
};
