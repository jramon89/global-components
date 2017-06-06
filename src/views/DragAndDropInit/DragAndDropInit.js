import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DragAndDrop from '../../Components/DragAndDrop/DragAndDrop';

export default
class DragAndDropInit extends Component {
	
	static propTypes={
		test: PropTypes.bool
	}

	constructor(props) {
		super(props);
		
		this.state={

		}
	}

	render() {
		return(
			<DragAndDrop 
				items={
					[
						{item:(<div>Paragraph</div>)},

						{item:(<div><img src="" alt="image"/></div>)},

						{item:""},

						{item:""},

						{item:""},
					]
				}/>
		);
	}
}
