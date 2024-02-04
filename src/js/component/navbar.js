import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 p-4">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star wars</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favoritos</button>
				</Link>
			</div>
		</nav>
	);
};
