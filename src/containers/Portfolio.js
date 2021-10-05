import "../components/css/nav.css";
import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Projects from './Projects'
import "../components/css/page.css"


const Portfolio = () => {
	return (
		<>
			<Router>
				<div id="nav-bar">
					<div id="nav-bar-left">
						<li className="nav-bar-item-left">
							<Link className="nav-bar-link"
								to={{ pathname: "https://www.linkedin.com/in/robert-hollingworth/" }}
								target="_blank" > LinkedIn </Link>
						</li>
						<li className="nav-bar-item-left">
							<Link className="nav-bar-link"
								to={{ pathname: "https://github.com/robbobby" }}
								target="_blank" > GitHub </Link>
						</li>
					</div>


					<div id="nav-bar-right">
						<li className="nav-bar-item-right">
							<Link className="nav-bar-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-bar-item-right">
							<Link className="nav-bar-link" to="/about">
								About
							</Link>
						</li>
						<li className="nav-bar-item-right">
							<Link className="nav-bar-link" to="/projects">
								Projects
							</Link>
						</li>
					</div>
				</div>

				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/projects" component={Projects} />
					</Switch>
				</div>
			</Router>
		</>
	);
};

export default Portfolio;
