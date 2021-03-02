import React, { useContext } from "react";
import { RandomContext } from "../../contexts/RandomContext";
import HeroDetails from "../HeroDetails/HeroDetails";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

export const Random = () => {
	const { RandomNumber, loading, data } = useContext(RandomContext);

	return (
		<>
			<div className="searchContainer">
				<h1>Random</h1>
				<Button
					id="randomButton"
					variant="contained"
					color="primary"
					onClick={RandomNumber}
				>
					Random Heroe
				</Button>
			</div>

			<div className="searchResults">
				{!loading ? (
					data.response !== "" ? (
						<HeroDetails arr={data} />
					) : null
				) : (
					<CircularProgress />
				)}
			</div>
		</>
	);
};
