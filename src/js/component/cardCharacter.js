import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const CardCharacter = (props) => {
	const { store, actions } = useContext(Context)
	const character = props.character
	const index = props.index
	const handleErrorImage = e => e.target.src = "https://star-wars-blog-sandy.vercel.app/star_wars_404.png"
	const img = "https://starwars-visualguide.com/assets/img/character/" + (index + 1) + ".jpg"

	return (
		
			<div className="card m-5" style={{ width: `18rem` }} >

				<div key={index}>
					< img src={img} onError={handleErrorImage} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{character.name}</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-primary">Learn More</a>

					</div>
				</div>


			</div>

		





	)
}