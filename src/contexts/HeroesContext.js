import React, { createContext, useEffect, useState } from "react";

export const HeroesContext = createContext();

export const HeroesContextProvider = ({ children }) => {
	const [value, setValue] = useState();
	const [data, setData] = useState({
		response: "",
		"results-for": "",
		results: [
			{
				id: "",
				name: "",
				publisher: "",
			},
		],
		image: "",
	});
	const [loading, setLoading] = useState(false);

	const cors_anywhere = "https://cors-anywhere.herokuapp.com/";
	const apiKey = 2122272727913877;
	const url = `${cors_anywhere}https://superheroapi.com/api/${apiKey}/search/${value}`;

	const handleChange = (e) => {
		if (e.type === "keypress" && e.key !== "Enter") return;
		if (document.querySelector("#search").value === "") return;
		if (document.querySelector("#search").value === value) return;

		setLoading(true);
		setValue(document.querySelector("#search").value);
		document.querySelector("#search").value = "";
		document.querySelector("#search").disabled = true;
		document.querySelector("#searchButton").disabled = true;
		document.querySelector("#searchButton").classList.add("Mui-disabled");
	};

	useEffect(() => {
		if (value === undefined) {
			return;
		}

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
				document.querySelector("#search").disabled = false;
				document.querySelector("#searchButton").disabled = false;
				document.querySelector("#searchButton").classList.remove("Mui-disabled");
			})
			.catch((err) => console.log(err));
	}, [value, url]);

	return (
		<HeroesContext.Provider value={{ handleChange, loading, data }}>
			{children}
		</HeroesContext.Provider>
	);
};
