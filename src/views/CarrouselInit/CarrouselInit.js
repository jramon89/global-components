import React, { Component } from 'react';
import Carrousel from '../../components/Carrousel/Carrousel';

export default
class CarrouselInit extends Component{
	
	constructor(props){
		super(props);
		this.state={
			items:[
				/*{
					src: 'http://lorempixel.com/700/300/sports/'
				},{
					src: 'http://lorempixel.com/700/300/city/'
				},{
					src: 'http://lorempixel.com/700/300/cats/'
				},{
					src: 'http://lorempixel.com/700/300/nature/'
				}*/
				{
					src: '../../../static/images/image01.jpg'
				},{
					src: '../../../static/images/image02.jpg'
				},{
					src: '../../../static/images/image03.png'
				},{
					src: '../../../static/images/image06.jpg'
				}
			]
		};
	}
	componentWillMount() {
		localStorage.setItem(
			'title',
			'Carrousel'
		);
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