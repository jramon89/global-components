import React, { Component } from 'react';
import PopoverContent from './PopoverContent';

import PropTypes from 'prop-types';

class Popover extends Component {

	static propTypes = {
		hoverElement: PropTypes.object,
		children: PropTypes.object
	}

	constructor(props){
		super(props);
		this.state={
			visible: false,
			
		}
	}

	togglePopover() {
		const { visible } = this.state;
		this.setState({visible: !visible});	
	}

	render() {
		const { hoverElement, children } = this.props;
		const { visible } = this.state;

		const showContent = visible ? (
				<PopoverContent
					content={children}
					togglePopover={this.togglePopover.bind(this)}/>
		
		) : null;

		return(
			<div className="popover">
				<div className="popover-hover" onClick={ this.togglePopover.bind(this) } ref="hover">
					{hoverElement}
				</div>
				{showContent}

			</div>
		);
	}
}
export default Popover;
