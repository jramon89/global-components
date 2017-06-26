import React, { Component } from 'react';
import Accordion from '../../Components/Accordion/Accordion';

export default
class AccordionInit extends Component{

	constructor(props) {
		super(props)
		this.state={
			data:[
				{
					title:'Title example', 
					content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat urna id lorem consequat, sed consequat erat euismod. Phasellus facilisis pulvinar mauris, non porta eros ultrices nec. Proin nec augue ex. Nunc accumsan lectus vitae tincidunt scelerisque. Ut consequat pellentesque tellus id egestas. Aliquam auctor arcu sit amet ultricies varius. Cras viverra est ut quam gravida lobortis. Sed euismod sapien sed nunc placerat rutrum. Ut imperdiet elementum odio, in iaculis ipsum pharetra a. Aliquam sit amet magna non velit facilisis laoreet. Donec lectus nisl, pellentesque ac auctor vel, volutpat eu es'
				},
				{
					title:'Title example', 
					content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat urna id lorem consequat, sed consequat erat euismod. Phasellus facilisis pulvinar mauris, non porta eros ultrices nec. Proin nec augue ex. Nunc accumsan lectus vitae tincidunt scelerisque. Ut consequat pellentesque tellus id egestas. Aliquam auctor arcu sit amet ultricies varius. Cras viverra est ut quam gravida lobortis. Sed euismod sapien sed nunc placerat rutrum. Ut imperdiet elementum odio, in iaculis ipsum pharetra a. Aliquam sit amet magna non velit facilisis laoreet. Donec lectus nisl, pellentesque ac auctor vel, volutpat eu es'
				},
				{
					title:'Title example', 
					content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat urna id lorem consequat, sed consequat erat euismod. Phasellus facilisis pulvinar mauris, non porta eros ultrices nec. Proin nec augue ex. Nunc accumsan lectus vitae tincidunt scelerisque. Ut consequat pellentesque tellus id egestas. Aliquam auctor arcu sit amet ultricies varius. Cras viverra est ut quam gravida lobortis. Sed euismod sapien sed nunc placerat rutrum. Ut imperdiet elementum odio, in iaculis ipsum pharetra a. Aliquam sit amet magna non velit facilisis laoreet. Donec lectus nisl, pellentesque ac auctor vel, volutpat eu es'
				},
				{
					title:'Title example', 
					content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat urna id lorem consequat, sed consequat erat euismod. Phasellus facilisis pulvinar mauris, non porta eros ultrices nec. Proin nec augue ex. Nunc accumsan lectus vitae tincidunt scelerisque. Ut consequat pellentesque tellus id egestas. Aliquam auctor arcu sit amet ultricies varius. Cras viverra est ut quam gravida lobortis. Sed euismod sapien sed nunc placerat rutrum. Ut imperdiet elementum odio, in iaculis ipsum pharetra a. Aliquam sit amet magna non velit facilisis laoreet. Donec lectus nisl, pellentesque ac auctor vel, volutpat eu es'
				}
			]
		}
	}
	componentWillMount() {
		localStorage.setItem(
			'title',
			'Accordion'
		);
	}
	render() {
		const { data } = this.state;

		return(
			<div>
				<Accordion data={data}/>
			</div>
		);
	}

}
