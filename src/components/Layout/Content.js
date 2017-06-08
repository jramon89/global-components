import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default
class Content extends Component{
	
	static propTypes = {
		children: PropTypes.object,
		title: PropTypes.string
	}

	render() {
		const { children, title } = this.props; 
		return(
			<section className="section">
				<div className="content">
					<div className="main-title">
						{title} zzzzzzz
					</div>
					<div>
						{children}
					</div>
				</div>
			</section>
		);
	}
}
