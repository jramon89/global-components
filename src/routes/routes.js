import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../Views/Layout/Layout';
import Views from '../Views';

console.log(Views);
 
const routes = (
	
	<Router>
		<Layout>
			<Switch>
				<Route exact path="/" component={Views.Test}/>
				<Route exact path="/accordion" component={Views.Accordion}/>

				<Route exact path="/alert" component={Views.Alert}/>
			</Switch>
		</Layout>
	</Router>
	
);

export default routes;