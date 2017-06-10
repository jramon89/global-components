import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default
class Content extends Component{
	
	static propTypes = {
		children: PropTypes.object,
	}

	constructor() {
		super();
		this.storage = null;
	}

	render() {
		const { children } = this.props; 

			const storage = JSON.parse(localStorage.getItem('title'));	
			
		return(
			<section className="section">
				<div className="content">
					<div className="main-title">
						{
							storage ? storage.title : null
						}
					</div>
					<div>
						{children}
					</div>
				</div>
			</section>
		);
	}
}
