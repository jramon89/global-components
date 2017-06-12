import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../../../static/logo.svg';   

export default
class Menu extends Component{
	
	static propTypes = {
		title: PropTypes.string,
		children: PropTypes.object
	}

	constructor(props) {
		super(props);
		this.items = [
			{link:'/accordion', title:'Accordion'},
			{link:'/alert', title:'Alert'},
			{link:'/collapse', title:'Collapse'},
			{link:'/dropdown', title:'Dropdown'},
			{link:'/tooltip', title:'Tooltip'},
			{link:'/modal', title:'Modal'},
			{link:'/carrousel', title:'Carrousel'},
			{link:'/draganddrop', title:'Drag & Drop'},
			{link:'/search', title:'Search'},
			{link:'/popover', title:'Popover'}
		]
	}
	

	setTitle(title) {
		localStorage.setItem(
			'title',
			JSON.stringify(title)
		);
	
	}

	componentDidMount() {

		this.image.style.width = this.nav.offsetWidth+"px";
	}

	render() {
		return(
			<nav className="nav" ref={ (e) => this.nav = e }>

				
				<div className="logo">
					<img src={Logo} width="10" ref={ (e) => this.image = e }/>
				</div>
				<div className="nav-title">
					Components&nbsp;
					<span className="fa fa-code"/>
				</div>
				<div className="nav-content">
					<ul>
						{
							this.items.map((value, i) => {
								return(
									<li key={i}>
										<Link to={value.link} onClick={ () => this.setTitle(value) }>
											{value.title}
										</Link>
									</li>
								)
							})
						}
					</ul>
				</div>
			
			</nav>
		);
	}
}
