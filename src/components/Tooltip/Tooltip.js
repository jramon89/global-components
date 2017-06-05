import React, { Component } from 'react';

import PropTypes from 'prop-types';
export default
class Tooltip extends Component{
	static porpTypes = {
		children: PropTypes.object,
		hoverElement: PropTypes.string
	}
	
	constructor(props) {
		super(props)
		this.state={
			show: false,
		};
	}
	
	componentDidUpdate(){
		const { show } = this.state,
			  { tc } = this.refs;

		if(show){
			setTimeout(()=>{
				tc.style.top="20px";
			});
		}
	}

	toggle() {
		
		this.setState({
			show: !this.state.show
		});
	}

	render() {
		const { children, hoverElement } = this.props;
		const { show } = this.state;

		const content = show ? (
			<div className="tooltip-content" ref="tc">
				<div className="item">
					{children}
				</div>
			</div>
		) : null;

		return(
			<div className="tooltip">
				<div className="tooltip-hover" 
					onMouseOver={this.toggle.bind(this)} 
					onMouseOut={this.toggle.bind(this)}>
					{hoverElement}
				</div>
					{content}
			</div>
		);
	}
}
