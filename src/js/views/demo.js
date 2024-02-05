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
				
			</div>

			<h1 className="text-danger m-5"><strong>Planets</strong></h1>

			<div className="m-5">

			</div>

			<h1 className="text-danger m-5"><strong>Vehicles</strong></h1>

			<div className="m-5">

			</div>


		</div>

	);
};
