import React, { Component } from 'react';

import PropTypes from 'prop-types';
export default
class Dropdown extends Component {
	
	static propTypes = {

		title: PropTypes.string.isRequired,
		children: PropTypes.element.isRequired
	}


	constructor(props) {
		super(props);


		this.state = {	
			maxHeight: props.maxHeight || 200,
			slide: 0,
			position: 0,
			bottom: 0,
			top: 0
		};
	}

	componentDidMount() {
		const { maxHeight } = this.state,
			  { dropdown } = this.refs, 
			  bottom = dropdown.getBoundingClientRect().bottom,
			  top = document.querySelector('footer').getBoundingClientRect().top

		this.setState({
			position: (top-bottom) <= maxHeight ? "28px" : 'inherit', 
			bottom: bottom,
			top: top
		});

	}

	timeDelay(values, time, callback) {
		setTimeout(()=>{
			this.setState(values);
		}, time);
	}

	onToggle() {
		
		const { open, maxHeight } = this.state;
		//const { maxHeight } = this.props;
	

		this.setState({
			open: !this.state.open,
			slide: !open ? maxHeight : 0
			//slide: !open ? (maxHeight ? maxHeight : 200) : 0
		});



	}

	render() {
		
		const { title, children } = this.props;
		const { open, slide, maxHeight, position, bottom, top } = this.state;


		//const position =  (top-bottom) <= (maxHeight ? maxHeight : 200) ? "28px" : 'inherit'
		return(
			<div className="dropdown">
				<div className="dropdown-content">
					<div className="dropdown-header" ref="dropdown" onClick={this.onToggle.bind(this)}>
						<div className="dropdown-title">
							{ title }
						</div>
						<div className="dropdown-arrow">
							<span className="fa fa-chevron-down"/>
						</div>
					</div>
					<div className="dropdown-body" ref="content" style={{maxHeight:slide+"px", bottom: position}}>
						<div className="dropdown-items">{children}</div>
					</div>
				</div>
			</div>
		);
	}
}
