import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

export const HeroPage = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({
		response: "",
		id: "",
		name: "",
		image: {
			url: "",
		},
	});

	let history = useHistory();

	function handleClick() {
		history.goBack();
	}

	let ref = window.location.href;
	const arrUrl = ref.split("/").reverse();

	const cors_anywhere = "https://cors-anywhere.herokuapp.com/";
	const apiKey = 2122272727913877;
	const url = `${cors_anywhere}https://superheroapi.com/api/${apiKey}/${arrUrl[0]}`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, [url]);

	console.log(data);

	return (
		<>
			{loading ? (
				<div className="container_heropage">
					<CircularProgress />
				</div>
			) : (
				<div className="container_heropage">
					<div className="img_heropage">
						<img src={`${data.image.url}`} alt={data.name} />
					</div>
					<div className="info_heropage">
						<h3>Biography</h3>
						<ul>
							<li>
								<strong>Full Name: </strong>
								{data.biography["full-name"]}
							</li>
							<li>
								<strong>Aliases: </strong>
								{data.biography.aliases.join(", ")}
							</li>

							<li>
								<strong>First Appearance: </strong>
								{data.biography["first-appearance"]}
							</li>
							<li>
								<strong>Power Stats: </strong>
								<ul>
									<li>
										<strong>Combat: {data.powerstats.combat}</strong>
									</li>
									<li>
										<strong>Durability: {data.powerstats.durability}</strong>
									</li>
									<li>
										<strong>Intelligence: {data.powerstats.intelligence}</strong>
									</li>
									<li>
										<strong>Power: {data.powerstats.power}</strong>
									</li>
									<li>
										<strong>Speed: {data.powerstats.speed}</strong>
									</li>
									<li>
										<strong>Strength: {data.powerstats.strength}</strong>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			)}
			<br />
			<div id="backButton">
				<Button variant="contained" color="primary" onClick={handleClick}>
					Go Back
				</Button>
			</div>
		</>
	);
};
