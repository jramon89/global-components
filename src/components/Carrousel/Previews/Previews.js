import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default
class Previews extends Component {
	static propTypes = {
		items: PropTypes.array,
		onSelect: PropTypes.func,
		show: PropTypes.bool
	}

	onSelect(i){

		this.props.onSelect(i);
	}

	render() {

		const { items, show } = this.props;

		const list = items.map((value, index)=>{

			const addClass = index === 0 ? 'item active' : 'item';
			
			return(
				<li key={index} className={addClass} onClick={this.onSelect.bind(this, index)}>
					<img src={value.src} alt="image" />
				</li>
			);
		});

		const previewsRender = show ? (
			<div className="carrousel-previews" >
				<ul ref="items">
					{list}
				</ul>
			</div>
		) : null;

		return previewsRender;

	}
}
