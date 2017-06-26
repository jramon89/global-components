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
	componentDidUpdate() {
		this.titleDOM.innerText = localStorage.getItem('title');
	}
	componentDidMount() {
		this.titleDOM.innerText = localStorage.getItem('title');
	}	
	render() {
		const { children } = this.props; 
			
		return(
			<section className="section">
				<div className="content">
					<div className="main-title" ref={(e) => this.titleDOM = e}/>
					<div>
						{children}
					</div>
				</div>
			</section>
		);
	}
}
