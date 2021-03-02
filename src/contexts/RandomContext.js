import React, { useState, createContext, useEffect } from "react";

export const RandomContext = createContext();

export const RandomContextProvider = ({ children }) => {
	const [randomValue, setRandomValue] = useState();
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState({
		response: "",
		id: "",
		name: "",
		image: {
			url: "",
		},
	});

	function RandomNumber() {
		setLoading(true);
		setRandomValue(getRndInteger(1, 731));
		// document.querySelector("#randomButton").disabled = true;
		// document.querySelector("#randomButton").classList.add("Mui-disabled");
	}

	function getRndInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const cors_anywhere = "https://cors-anywhere.herokuapp.com/";
	const apiKey = 2122272727913877;
	const url = `${cors_anywhere}https://superheroapi.com/api/${apiKey}/${randomValue}`;

	useEffect(() => {
		if (randomValue === undefined) {
			return;
		}

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
				document.querySelector("#randomButton").disabled = false;
				document.querySelector("#randomButton").classList.remove("Mui-disabled");
			})
			.catch((err) => console.log(err));
	}, [randomValue, url]);

	return (
		<RandomContext.Provider value={{ RandomNumber, loading, data }}>
			{children}
		</RandomContext.Provider>
	);
};
