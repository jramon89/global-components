import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default
class Content extends Component{
	
	static propTypes = {
		children: PropTypes.object
	}

	render() {
		const { children } = this.props; 
		return(
			<section className="section">
				<div className="content">
					{children}
				</div>
			</section>
		);
	}
}
