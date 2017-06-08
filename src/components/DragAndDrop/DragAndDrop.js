import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default
class DragAndDrop extends Component {
	
	static propTypes={
		items: PropTypes.array
	}

	constructor(props) {
		super(props);
		
		this.state={

		}

		this.currentElement = null;

		this.dragStart = this.dragStart.bind(this);
		this.dragLeave = this.dragLeave.bind(this);
		this.dragEnd = this.dragEnd.bind(this);
		this.dragOver = this.dragOver.bind(this);
		this.drop = this.drop.bind(this);
		this.dragOverElement = this.dragOverElement.bind(this);
		this.dragLeaveElement = this.dragLeaveElement.bind(this);
	}
	
	componentDidMount() {
		const { drag, drop } = this.refs;
		drop.style.height = drag.offsetHeight+"px";
		drag.style.height = drag.offsetHeight+"px";
	}

	dragStart(e) {
		e.dataTransfer.effecAllowed = 'move';
		e.dataTransfer.setData('Text', e.target.getAttribute('id'));
		//e.dataTransfer.setDragImage(e.target, 0, 0); 
		e.target.classList.add('start');
		this.id = e.target.parentNode.getAttribute('id');
		//e.dataTransfer.setData('xx', e.target.innerHTML);
	}
	dragLeave(e) {

		e.target.classList.remove('over');
	}

	dragEnd(e) {
		e.target.classList.remove('start');
	}

	dragOver(e) {
		if (e.preventDefault) {
		   e.preventDefault();
		}

		if(this.id !== e.target.getAttribute('id')){
			e.target.classList.add('over');
		}

	}

	drop(e) {
		if(e.stopPropagation()){
			e.stopPropagation();
		}
		if(e.preventDefault()){
			e.preventDefault();
		}
	
		e.target.classList.remove('over');
		console.log(e.dataTransfer.getData('Text'));
		
		if(!e.target.classList.contains('element')){

			e.target.appendChild(document.getElementById(e.dataTransfer.getData('Text')));
		}
		/*var node = document.createElement('div');
		var text = document.createTextNode(e.dataTransfer.getData('xx'));
		node.classList.add("element");
		node.appendChild(text);
		e.target.appendChild(node);*/
	}

	dragOverElement(e) {
		if (e.preventDefault) {
		   e.preventDefault();
		}
		e.target.style.marginTop = e.target.offsetHeight+"px";
	}
	dragLeaveElement(e) {
		e.target.style.marginTop ="inherit";
	}

	render() {
		const { items } = this.props;
	
		const elements = items.map((v,i)=>{
			return(
				<div key={i} className="element" id={"drg-"+i} draggable="true"
				 onDragStart={ this.dragStart }
				 onDragEnd={ this.dragEnd }>
					Element {i}
				</div>
			);
		})

		return(
			<div className="drag-drop">
				<div className="drag-content draggable" id="first" ref="drag" 
					onDragOver={ this.dragOver }
					onDrop={ this.drop }
					onDragLeave={ this.dragLeave } >
					{elements}
				</div>
				
				<span className="fa fa-chevron-left arrow"/>
				<span className="fa fa-chevron-right arrow"/>

				<div className="drop-content draggable" id="second" ref="drop" 
					onDragOver={ this.dragOver }
					onDrop={ this.drop }
					onDragLeave={ this.dragLeave }>

				</div>
			</div>
		);
	}
}
