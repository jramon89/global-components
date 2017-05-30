import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default
class Alert extends Component{
	static propTypes = {
		children: PropTypes.object,
		header: PropTypes.string,
		footer: PropTypes.string,
		onToggle: PropTypes.func,
		maxWidth: PropTypes.number
	}

	constructor(props){
		super(props)
		this.state={
			show: props.show,
			marginLeft: 0,
			initLeft: 0,
			initTop: 0

		};
		this.moveEvent = this.onMouseMove.bind(this);

	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			show: nextProps.show
		})
	}
	onMouseMove(e) {
		const { initLeft, initTop } = this.state, 
			{ alert } = this.refs,
			y = Math.round(e.clientY),
			x = Math.round(e.clientX);

		alert.style.top = y-initTop+"px";
		alert.style.left = x-initLeft+"px";
	}

	onMouseDown(e) {
		const { alert } = this.refs;

		this.setState({
			initLeft: e.clientX-alert.getBoundingClientRect().left,
			initTop: e.clientY-alert.getBoundingClientRect().top
		});

		document.addEventListener('mousemove', this.moveEvent);
	}

	onMouseUp() {

		document.removeEventListener('mousemove', this.moveEvent);
	}

	onToggle() {
		const { onToggle, show } = this.props;
		if(onToggle){
			onToggle();	
		}else{
			this.setState({
				show: !show
			})
		}
	}

	render() {

		const { children, header, footer, onToggle, maxWidth } = this.props;
		const { show } = this.state;

		const content  = show ? (
			<div className="alert" ref="alert" style={{width: maxWidth+'px'}}>
				<div className="alert-content" >
					<div className="alert-header" 
						onMouseDown={this.onMouseDown.bind(this)}
						onMouseUp={this.onMouseUp.bind(this)}>
						<div className="alert-header-content">
							<div className="alert-title">{header}</div>
							<span className="fa fa-close" onClick={this.onToggle.bind(this)}></span>
						</div>
					</div>
					<div className="alert-body">
						{children}
					</div>
					{
						
						footer ? <div className="alert-footer">
									<div className="alert-footer-content">
										{footer}
									</div>
								</div> : null
					}
					
				</div>
			</div>
		) : null; 

		return content;
	}
}
