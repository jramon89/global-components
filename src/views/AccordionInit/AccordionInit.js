import React, { Component } from 'react';
import Accordion from '../../Components/Accordion/Accordion';

export default
class AccordionInit extends Component{

	constructor(props) {
		super(props)
		this.state={
			data:[
				{title:'Title example', content:'Content'},
				{title:'Title example', content:'Content'},
				{title:'Title example', content:'Content'},
				{title:'Title example', content:'Content'}
			]
		}
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
