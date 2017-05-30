import React, { Component } from 'react';
import Alert from '../../Components/Alert/Alert';

export default
class AlertInit extends Component{

	constructor(props) {
		super(props)
		this.state={
		
		}
	}

	render() {
		const { data } = this.state;

		return(

			<Alert 
				header="Dialog title"
				maxWidth={300}>
				<div>
					<p>
						Content
					</p>
				</div>
			</Alert>
		);
	}

}
