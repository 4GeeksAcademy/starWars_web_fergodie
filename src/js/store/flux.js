const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			characters: [],
			planets: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				
					
				
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json() )
					.then(data => {
						console.log(data.results)
						setStore({ "characters": data.results })
					})
			},

			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(response => response.json() )
					.then(data => {
						console.log(data.results)
						setStore({ "planets": data.results })
					})
			},

			loadVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
				.then(response => response.json() )
				.then(data => {
					console.log(data.results)
					setStore({"vehicles": data.results })
				})

			},

			addFavorites: () => {},
			deleteFavorites: () => {},

			openSinglePerson: () => {},
			openSinglePlanet: () => {
				//fetch(/id   //aca esta barra id hola)
			},
			openSingleVehicle: () => {},


		}
	};
};

export default getState;
