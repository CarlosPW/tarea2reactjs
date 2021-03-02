import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { HeroesContextProvider } from "../../contexts/HeroesContext";
import { RandomContextProvider } from "../../contexts/RandomContext";
import { Navbar } from "../Common/Navbar";
import { HeroPage } from "../HeroPage/HeroPage";

import { Home } from "../Home/Home";
import { Random } from "../Random/Random";
import { Search } from "../Search/Search";

const AppRouter = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/random">
					<RandomContextProvider>
						<Random />
					</RandomContextProvider>
				</Route>
				<Route exact path="/search">
					<HeroesContextProvider>
						<Search />
					</HeroesContextProvider>
				</Route>
				<Route exact path="/">
					<Home />
				</Route>

				<Route>
					<HeroPage path="/:id" />
				</Route>

				<Redirect to="/" />
			</Switch>
		</Router>
	);
};

export default AppRouter;
