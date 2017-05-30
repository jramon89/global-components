import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Items from './Items/Items';
import Bullets from './Bullets/Bullets';
import Previews from './Previews/Previews';

class Corrousel extends Component {

	static propTypes = {
		items: PropTypes.array,
		previews: PropTypes.bool,
		bullets: PropTypes.bool,
		autoPlay: PropTypes.bool,
		animation: PropTypes.string,
		contentType: PropTypes.string,
		handlerContent: PropTypes.func
	}

	constructor(props){
		super(props);
		this.state={
			currentActiveElement: 0,
			itemsElements: null,
			bulletsElements: null,
			previewsElements: null
		}
		
	}


	componentDidMount() {
		const { autoPlay } = this.props;
		const { list, previews, bullets } = this.refs;

		if(autoPlay){
			this.intervalTime(function(){
				this.next()
			}.bind(this),3500);
		}

		this.setState({
			itemsElements: list.refs.items,
			bulletsElements: bullets.refs.items,
			previewsElements: previews.refs.items
		})

	}


	intervalTime(callback, time) {
		setInterval(()=>{
			callback()
		}, time)
	}

	delayTime(callback, time) {
		setTimeout(()=>{
			callback();
		}, time)
	}

	interaction(currentActiveElement, selectedElement, type) {
		const { animation } = this.props;

		let whichClass = type === "next" ? 'right' : 'left';

		if(animation === 'slide'){

			currentActiveElement.classList.add('back');

			this.delayTime(()=>{
				currentActiveElement.classList.remove('back', whichClass);
			}, 1000);

		} else if( animation === 'fade'){

			whichClass='fade';

		}else{

			whichClass=null;
		}

		if(whichClass){

			selectedElement.classList.add(whichClass);

			this.delayTime(()=>{
				selectedElement.classList.remove(whichClass);
				currentActiveElement.classList.add(whichClass)
			},100);
		}
		
	}

	controlls(type) {
		const { list, previews, bullets } = this.refs;
		const { itemsElements, bulletsElements, previewsElements } = this.state;
		const event = (typeof type === 'string') ? type : type.event;

		const start = (arr)=>{
				if(arr){
						let element = null,
						index = 0,
						el = [...arr.children].find((value, index)=>{
						
							if(!type.event){
								this.setState({
									currentActiveElement:type === 'next' ? index+1 : index-1
								})
							}
							return value.classList.contains('active');
						});

					switch(type){
						case 'next':
							element = el.nextSibling;
							break;
						case 'prev':
							element = el.previousSibling;
							index = [...arr.children].length-1;
							break;
						default:
							element = [...arr.children][type.id];
					}

			
					el.classList.remove('active', 'animation');

					if(!element){
						[...arr.children][index].classList.add('active');
						this.interaction(el, [...arr.children][index], event);
					}else{
						element.classList.add('active');
						this.interaction(el, element, event);	

					}
				}
			}

		start(itemsElements);
		start(bulletsElements);
		start(previewsElements);
	}

	next() {
		this.controlls('next');
	}

	prev() {
		this.controlls('prev');
	}

	onSelect(i) {
		const { currentActiveElement } = this.state;
		
		this.setState({
			currentActiveElement: i
		});

		if(i !== currentActiveElement){
			if(i > currentActiveElement){
			this.controlls({
				event:'next', 
				id:i
			});
			}else{
				this.controlls({
					event:'prev', 
					id:i
				});	
			}
		}
	}

	handlerContent(i) {
		const { handlerContent } = this.props;
		if(handlerContent){
			handlerContent(i);	
		}
	}

	render() {
		const { items, bullets, previews, animation } = this.props;
		return(
			<div className="carrousel" ref="elements">
				<div className="carrousel-content">
					<span className="controll-left left fa fa-chevron-circle-left" onClick={this.prev.bind(this)}></span>
					<Items 
						items={items} 
						isPreview={false} 
						ref="list" 
						isImage={true}
						animation={animation}
						handlerContent={this.handlerContent.bind(this)}
					/>
					<span className="controll-right right fa fa-chevron-circle-right" onClick={this.next.bind(this)}></span>
				</div>
				<Bullets
					ref="bullets" 
					items={items}
					show={bullets} 
					onClick={this.onSelect.bind(this)}
					/>				
				<Previews
					ref="previews" 
					items={items}
					show={previews} 
					onSelect={this.onSelect.bind(this)}
				/>
				
			</div>
		);
	}
}
export default Corrousel;
