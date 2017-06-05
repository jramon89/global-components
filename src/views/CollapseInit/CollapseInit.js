import React, { Component } from 'react';
import Collapse from '../../Components/Collapse/Collapse';

export default
class CollapseInit extends Component{

	constructor(props) {
		super(props)
		this.state={
		
		}
	}

	render() {
		const { data } = this.state;

		return(

			<Collapse 
				open={false}
				maxWidth={300}
				title="Title">
				<div>
					<p>
						Content
					</p>
				</div>
			</Collapse>
		);
	}

}
