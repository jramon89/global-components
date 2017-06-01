import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default
class Menu extends Component{
	
	static propTypes = {
		title: PropTypes.string,
		children: PropTypes.object
	}

	render() {
		return(
			<nav className="nav">
				<ul>
					<li>
						<Link to="/accordion">Accordion</Link>
					</li>
					<li>
						<Link to="/alert">Alert</Link>
					</li>
					<li>
						<Link to="/carrousel">Carrousel</Link>
					</li>
					<li>
						<Link to="/modal">Modal</Link>
					</li>
				</ul>
			</nav>
		);
	}
}
