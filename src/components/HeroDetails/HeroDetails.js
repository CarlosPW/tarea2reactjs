import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		maxWidth: 245,
		margin: 10,
	},
});

export default function HeroDetails({ arr }) {
	const classes = useStyles();
	const { id } = arr;
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt={arr.name}
					height="300"
					image={arr.image.url}
					title={arr.name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{arr.name}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button component={Link} to={`/${id}`} size="medium" color="primary">
					Show More
				</Button>
				{/* <Link to={`/${id}`}>Show More</Link> */}
			</CardActions>
		</Card>
	);
}
