import React, { Component } from 'react';
import Layout from '../Layout/Layout';

export default
class Test extends Component{
	
	componentDidMount() {
		localStorage.setItem(
			'title',
			'Home'
		);
	}

	render() {
		return(
			<div>
			{/*<Layout
				title="Test">
				<h1>
					Tests
				</h1>				
			</Layout>*/}
			</div>
		);
	}
}