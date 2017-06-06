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

	render() {
		const { items } = this.props;
	
		const elements = items.map((v,i)=>{
				console.log(v.item)
			return(
				<div key={i} className="element">
					Element {i}
				</div>
			);
		})
		return(
			<div className="drag-drop">
				<div className="drag-elements-content">
					<div className="element-content">
						{elements}
					</div>
				</div>
				<span className="fa fa-arrow-left"/>
				<span className="fa fa-arrow-right"/>
				<div className="drop-elements-content">
					b
				</div>
			</div>
		);
	}
}
