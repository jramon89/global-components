import React, { Component, PropTypes } from 'react';
import Search from '../../Components/Search/Search';
export default
class SearchInit extends Component{

	static propTypes = {}

	constructor(props){
		super(props);
		this.state={}
	}
	
	render() {
		const { active } = this.state;
		return(
			<Search
				animation={true}/>
		);
	}
}
