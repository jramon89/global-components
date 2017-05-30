import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default
class Items extends Component {

	static propTypes = {
		items: PropTypes.array.isRequired,
		onClick: PropTypes.func,
		isImage: PropTypes.bool,
		event: PropTypes.string,
		animation: PropTypes.string,
		handlerContent: PropTypes.func
	}

	constructor(props){
		super(props);
		this.state = {
			elements:{
				slides: [],
				bullets: []
			}
		}
	}

	componentDidMount() {
		const { slides, bullets, img, items } = this.refs;
		const { elements } = this.state;

		elements.slides = slides;
		elements.bullets = bullets;

		this.setState({elements});

	}


	onSelect(i) {
		if(this.props.onSelect){
			this.props.onSelect(i)	
		}
	}

	handlerContent(i) {
		const { handlerContent } = this.props;

		if(handlerContent){
			handlerContent(i)
		}
	}

	render() {
		const { items, isPreview, isImage, handlerContent, animation } = this.props;
		
		const list = items.map((value, index)=>{

			const addClass = index === 0 ? `item active` : `item `;
			
			const backgroundImage = {
				backgroundImage:`url(${value.src})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",

			}


			
			const content = isImage ? (
				<img src={value.src} alt="image" />
			) : (
				<div className="img" style={backgroundImage}></div>
			)
			
			const renderContent = (
				<li key={index} className={addClass} onClick={this.handlerContent.bind(this,index)} ref="img">
					{content}
				</li>
			);

			return renderContent

		});
		
		return (

			<ul ref="items" className={animation || 'hide'}>
				{list}
			</ul>
		);
	}
}
