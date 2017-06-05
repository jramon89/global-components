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
				<Route path="/accordion" component={Views.Accordion}/>
				<Route path="/alert" component={Views.Alert}/>
				<Route path="/carrousel" component={Views.Carrousel}/>
				<Route path="/modal" component={Views.Modal}/>
				<Route path="/dropdown" component={Views.Dropdown}/>
				<Route path="/tooltip" component={Views.Tooltip}/>
				<Route path="/collapse" component={Views.Collapse}/>
			</Switch>
		</Layout>
	</Router>
	
);

export default routes;