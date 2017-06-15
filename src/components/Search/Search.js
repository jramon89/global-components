import React, { Component, PropTypes } from 'react';
export default
class Search extends Component{

	static propTypes = {
		onSubmit: PropTypes.func,
		animation: PropTypes.bool

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
		console.log(this.form.parentNode);
		this.form.parentNode.position="relative";
	}

	onSubmitValue(e) {
		e.preventDefault();
	}

	render() {
		const { active } = this.state;
		const { animation } = this.props;

		return(
			<form onSubmit={this.onSubmitValue.bind(this)} ref={ (e) => this.form = e }>
				{
					animation ?
						<div className="search">
							<div className={ active ? 'search-items active' : 'search-items'}>
								<div className="field">
									<input ref="search" type="search" placeholder="search" />
								</div>
								<div className="icon" onClick={ this.onToggle.bind(this) }>
									<span className="fa fa-search"/>
								</div>
							</div>
						</div> :
					<input ref="search" type="search" placeholder="search" />

				}
			</form>
		);
	}
}
