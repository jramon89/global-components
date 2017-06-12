import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
//import { getFilteredCategory } from '../../actions/actionsTypes';
export default
class Search extends Component{

	static propTypes = {
		onSubmit: PropTypes.func

	}

	constructor(props){
		super(props);
		this.state={
			active: false
		}
	}
	
	onToggle() {
		const { active } = this.state;

		this.setState({
			active: !active
		});
	}

	componentDidMount() {
	
		const { dispach } = this.props;
	}

	onSubmitValue(e) {
		e.preventDefault();
		const { onSubmit } = this.props;
		onSubmit(this.refs.search.value);
	}

	render() {
		const { active } = this.state;
		return(
			<form onSubmit={this.onSubmitValue.bind(this)}>
				<div className="search">
					<div className={ active ? 'search-items active' : 'search-items'}>
						<div className="field">
							<input ref="search" type="search" placeholder="search" />
						</div>
						<div className="icon" onClick={ this.onToggle.bind(this) }>
							<span className="fa fa-search"/>
						</div>
					</div>
				</div>
			</form>
		);
	}
}
