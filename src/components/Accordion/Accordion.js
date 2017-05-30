import React, { Component, PropTypes } from 'react';
import AccordionItem from './AccordionItem';
export default
class Collapse extends Component {
	static propTypes =  {
		data: PropTypes.array
	}

	constructor(props){
		super(props);
		this.state = {
			elements: props.data
		}
	}
	
	componentDidMount() {

		const { animation } = this.props;

	}

	toggle(e) {

		const { data } = this.props;
		
		if(data[e].active){
			data[e].active = !data[e].active;
		}else{
			data.map((e,i)=>{
				if(e.active){
					e.active = !e.active
				}
			})

			data[e].active = !data[e].active;
		}
		
		
		this.setState({
			elements: data
		})
	

	}

	render() {
		
		const { children, title, data } = this.props;
		const { elements } = this.state;
		

		const items = elements.map((e,i)=>{
			return (
				<AccordionItem 
					key={i} 
					title={e.title}
					active={e.active}
					maxHeight={e.maxHeight}
					toggle={this.toggle.bind(this, i)}>
					<div>{e.content}</div>
				</AccordionItem>
			);
		});

		return(
			<div className="accordion" ref="acc">
				{items}
			</div>
		);
	}

}
