import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default
class Layout extends Component{
	
	static propTypes = {
		title: PropTypes.string,
		children: PropTypes.object
	}

	render() {
		const { title, children } = this.props; 
		return(
			<section>
				<header>
					<div>{title}</div>
				</header>
				<article>
					<div>{children}</div>
				</article>
			</section>
		);
	}
}
