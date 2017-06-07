import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default
class DragAndDrop extends Component {
	
	static propTypes={
		items: PropTypes.array
	}

	constructor(props) {
		super(props);
		
		this.state={}
	}
	
	componentDidMount() {
		const { drag, drop } = this.refs;
		drop.style.height=drag.offsetHeight+"px";
	}

	dragStart(e) {
		e.target.style.border="dashed";
		e.dataTransfer.setData('Text', e.target.getAttribute('id'));
	}

	dragEnd(e) {
		e.target.style.border="inherit";
	}

	dragEnter(e) {
		e.target.style.border="solid red";
	}

	dragOver(e) {
		if (e.preventDefault) {
		   e.preventDefault();
		}
	}

	drop(e) {
		if(e.stopPropagation()){
			e.stopPropagation();
		}
		if(e.preventDefault()){
			e.preventDefault();
		}
	
		console.log(e.dataTransfer.getData('Text'));
		//return false;
		e.target.appendChild(document.getElementById(e.dataTransfer.getData('Text')));
	}

	render() {
		const { items } = this.props;
	
		const elements = items.map((v,i)=>{
				console.log(v.item)
			return(
				<div key={i} className="element" id={"drg-"+i} draggable="true"
				 onDragStart={ (e) => {this.dragStart(e)}}
				 onDragEnd={ (e) => {this.dragEnd(e)}}>
					Element {i}
				</div>
			);
		})

		return(
			<div className="drag-drop">
				<div className="drag-content" ref="drag">
					<div className="element-content">
						{elements}
					</div>
				</div>
				<span className="fa fa-chevron-left arrow"/>
				<span className="fa fa-chevron-right arrow"/>
				<div className="drop-content" ref="drop" 
					onDragOver={ (e) => {this.dragOver(e)} }
					onDrop={ (e) => {this.drop(e)} }>
				</div>
			</div>
		);
	}
}
