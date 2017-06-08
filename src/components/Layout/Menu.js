import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default
class Menu extends Component{
	
	static propTypes = {
		title: PropTypes.string,
		children: PropTypes.object
	}

	componentDidMount() {
		
		this.image.style.width = this.nav.offsetWidth+"px";
	}

	render() {
		return(
			<nav className="nav" ref={ (e) => this.nav = e }>

				<div className="nav-title">
					Components&nbsp;
					<span className="fa fa-code"/>
				</div>
				<div className="react-image">
					<img src="https://facebook.github.io/react/img/logo.svg" width="10" ref={ (e) => this.image = e }/>
				</div>
				<div className="nav-content">
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
						<li>
							<Link to="/dropdown">Dropdown</Link>
						</li>
						<li>
							<Link to="/tooltip">Tooltip</Link>
						</li>
						<li>
							<Link to="/collapse">Collapse</Link>
						</li>
						<li>
							<Link to="/draganddrop">Drag & Drop</Link>
						</li>
						<li>
							<Link to="/popover">Popover</Link>
						</li>
					</ul>
				</div>
			
			</nav>
		);
	}
}
