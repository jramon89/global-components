import React, { Component } from 'react';
import Collapse from '../../Components/Collapse/Collapse';

export default
class CollapseInit extends Component{

	constructor(props) {
		super(props)
		this.state={}
	}
	componentWillMount() {
		localStorage.setItem(
			'title',
			'Collapse'
		);
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat urna id lorem consequat, sed consequat erat euismod. Phasellus facilisis pulvinar mauris, non porta eros ultrices nec. Proin nec augue ex. Nunc accumsan lectus vitae tincidunt scelerisque. Ut consequat pellentesque tellus id egestas. Aliquam auctor arcu sit amet ultricies varius. Cras viverra est ut quam gravida lobortis. Sed euismod sapien sed nunc placerat rutrum. Ut imperdiet elementum odio, in iaculis ipsum pharetra a. Aliquam sit amet magna non velit facilisis laoreet. Donec lectus nisl, pellentesque ac auctor vel, volutpat eu es
					</p>
				</div>
			</Collapse>
		);
	}

}
