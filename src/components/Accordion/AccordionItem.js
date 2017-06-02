import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default
class AccordionItem extends Component {
	static propTypes =  {
		children: PropTypes.element,
		title: PropTypes.string,
		active: PropTypes.bool,
		toggle: PropTypes.func,
		maxHeight: PropTypes.number
	}

	constructor(props){
		super(props);
		this.state = {}
	}
	
	componentDidMount() {
		const { active, maxHeight } = this.props;
	
	}

	componentWillUnmount() {

	}

	/**
		Unused function
	**/
	toggle() {

		const { acc } = this.refs;

		if(acc.classList.contains('active')){
			acc.classList.remove('active');
		}else{

			[...acc.parentNode.children].map((e,i)=>{
				e.classList.remove('active');
			});

			acc.classList.add('active');

		}
	}

	/****/
	
	render() {
		
		const { children, title, active, toggle, maxHeight } = this.props;

		//const toggleClassActive = active ? "accordion-item active" : "accordion-item";

		const values = {
			height: active ? (maxHeight ? maxHeight : 200) : 0,
			class: active ? "fa fa-chevron-down" : "fa fa-chevron-right"
		}

		const open = active ? (maxHeight ? maxHeight : 200) : 0;
	
		return(
			<div className="accordion-item" ref="acc">
				<div className="accordion-item-content">
					<div className="header" onClick={toggle.bind(this)} ref="ev">
						<div className="title">
							{title}
						</div>
						<div className="arrow">
							<span className={values.class}/>
						</div>
					</div>
					<div className="body" style={{maxHeight:values.height+"px"}}>
						<div className="content-body" >
							{children}
						</div>
					</div>
				</div>
			</div>
		);
	}

}
