import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default
class Collapse extends Component {
	static propTypes =  {
		children: PropTypes.element.isRequired,
		open: PropTypes.bool,
		title: PropTypes.string,
		maxHeight: PropTypes.number
	}

	constructor(props){
		super(props);
		this.state = {
			open: props.open
		}
	}
	
	toggle() {
		this.setState({
			open: !this.state.open
		});
	}
	
	render() {
		
		const { children, title, maxHeight } = this.props;
		const { open } = this.state;
		

		const values = {
			height: open ? (maxHeight ? maxHeight : 200) : 0,
			class: open ? "fa fa-chevron-down" : "fa fa-chevron-right"
		}

		return(
			<div className="collapse" ref="col">
				<div className="collapse-content">
					<div className="header" onClick={this.toggle.bind(this)}>
						<div className="title">
							{title}
						</div>
						<div className="arrow">
							<span className={values.class}/>
						</div>
					</div>
					<div className="body" style={{maxHeight: values.height}}>
						<div className="content-body">
							{children}
						</div>
					</div>
				</div>
			</div>
		);
	}

}
