import React, { Component, PropTypes } from 'react';

export default
class popoverContent extends Component {
	static propTypes = {
		content: PropTypes.object,
		togglePopover: PropTypes.func
	}

	constructor(props){
		super(props);
		this.state={
			visible: false,
			limits:{
				hover:{
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				content:{
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			coors:{
				x:0,
				y:0
			}
			
		}
		this.click = this.limits.bind(this);
	}
	


	limits(e) {
		const { togglePopover, hover } = this.props;
		const { visible, limits } = this.state;
		/*const content = this.refs.content.getBoundingClientRect(),
			  hover = this.refs.hover.getBoundingClientRect();*/

		const evalC = (e.clientX >= limits.content.right 
			&& e.clientX <= limits.content.left 
			&& e.clientY >= limits.content.top 
			&& e.clientY <= limits.content.bottom);

		//console.log('chk', evalC, evalH);
		//console.log(13, content, hover);
		//console.log(e.clientX, e.clientY);
		if(!evalC){
			togglePopover();
		}
	}



	componentDidMount() {
		const content = this.refs.content.getBoundingClientRect();
	
		this.setState({ 
			limits:{
				content:{
					top: content.top,
					bottom: content.bottom,
					left: content.right, 
					right: content.left
				}
			}
		})
		document.addEventListener('click', this.click);
	}
	
	componentWillUnmount() {
		document.removeEventListener('click', this.click);
	}

	render() {
		return(
			<div className="popover-content" ref="content">
				<div className="popover-items-content">
					{this.props.content}
				</div>
			</div>
		);
	}
}
