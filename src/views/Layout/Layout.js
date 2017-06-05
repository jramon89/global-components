import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from '../../components/Layout/Menu';
import Content from '../../components/Layout/Content';

export default
class Layout extends Component{
	
	static propTypes = {
		children: PropTypes.object
	}

	render() {
		const { children } = this.props; 
		return(
			<section>
				<section className="container">
					<Menu/>
					<Content children={children}/>

				</section>
				<footer className="footer"></footer>
			</section>
		);
	}
}
