import React, { Component } from 'react';
import Carrousel from '../../components/Carrousel/Carrousel';

export default
class CarrouselInit extends Component{
	
	constructor(props){
		super(props);
		this.state={
			items:[
				{
					src: 'http://lorempixel.com/700/300/sports/'
				},{
					src: 'http://lorempixel.com/700/300/city/'
				},{
					src: 'http://lorempixel.com/700/300/cats/'
				},{
					src: 'http://lorempixel.com/700/300/nature/'
				}
			]
		};
	}

	render() {
		const { items } = this.state;

		return(
			<Carrousel
					items={items}
					bullets={true}
					previews={true}
					autoPlay={true}
					animation="slide"
				/>
		);
	}
}