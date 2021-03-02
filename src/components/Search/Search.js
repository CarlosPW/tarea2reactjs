import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { HeroesContext } from "../../contexts/HeroesContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Error } from "../Common/Error";
import HeroDetails from "../HeroDetails/HeroDetails";
import "../../assets/styles/style.css";

export const Search = () => {
	const { handleChange, loading, data } = useContext(HeroesContext);
	const { results } = data;

	console.log(data);
	return (
		<div className="searchContainer">
			<div>
				<h1>Search</h1>
				<div className="form_container">
					<TextField
						id="search"
						label="Search Heroe"
						variant="outlined"
						onKeyPress={(e) => {
							handleChange(e);
						}}
					/>
					<Button
						id="searchButton"
						variant="contained"
						color="primary"
						onClick={(e) => {
							handleChange(e);
						}}
					>
						Search
					</Button>
				</div>
			</div>
			<div className="searchResults">
				{!loading ? (
					data.response === "error" ? (
						<Error error={data.error} />
					) : data.response === "success" ? (
						results.map((arr, i) => {
							return <HeroDetails className="hero_details" arr={arr} key={i} />;
						})
					) : null
				) : (
					<CircularProgress />
				)}
			</div>
		</div>
	);
};
