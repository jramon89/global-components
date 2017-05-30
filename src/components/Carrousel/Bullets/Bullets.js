import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default
class Bullets extends Component {
	static propTypes ={
		items: PropTypes.array,
		onClick: PropTypes.func,
		show: PropTypes.bool
	}

	onClick(i) {
		if(this.props.onClick){
			this.props.onClick(i)	
		}
	}
	
	render() {
		const { items, show } = this.props;
		const list = items.map((value, index)=>{
			const addClass = index === 0 ? `item active animation` : `item `;
			
			return (
				<li key={index} className={addClass} onClick={this.onClick.bind(this,index)}>
					<span className="fa fa-circle-thin"></span>
				</li>
			);
		});

		const bulletsRender = show ? (
			<div className="carrousel-bullets">
				<ul className="bullets" ref="items" >
					{list}
				</ul>
			</div>
		) : null;
		
		return bulletsRender;
	}	
}
