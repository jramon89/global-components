import React, { Component } from 'react';

import PropTypes from 'prop-types';
export default
class Dropdown extends Component {
	
	static propTypes = {

		title: PropTypes.string.isRequired,
		children: PropTypes.element.isRequired,
		maxHeight: PropTypes.number,
		open: PropTypes.bool,
		selected: PropTypes.string
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
			top: top,
			slide: this.props.open ? maxHeight : 0
		});

	}

	componentWillReceiveProps(nextProps) {
		
		this.setState({
			slide: 0 
		})
	}
	
	timeDelay(values, time, callback) {
		setTimeout(()=>{
			this.setState(values);
		}, time);
	}

	onToggle() {
		
		const { open, maxHeight } = this.state;
	
		this.setState({
			open: !this.state.open,
			slide: this.state.slide > 0 ? 0 : maxHeight
		});

	}

	render() {
		
		const { title, children, selected } = this.props;
		const { open, slide, maxHeight, position, bottom, top } = this.state;

		return(
			<div className="dropdown">
				<div className="dropdown-content">
					<div className="dropdown-header" ref="dropdown" onClick={this.onToggle.bind(this)}>
						<div className="dropdown-title">
							{ selected ? selected : title }
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
