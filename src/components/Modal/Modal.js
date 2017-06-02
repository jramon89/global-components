import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default
class Modal extends Component {

	static propTypes = {
		children: PropTypes.element,
		title: PropTypes.object,
		isOpen: PropTypes.bool,
		toggleModal: PropTypes.func
	}

	constructor(props) {
		super(props);
		this.state={
			show: props.isOpen
		}
		
	}

	delayClass(element, clase) {
		setTimeout(function(){
			element.classList.add(clase);
		});
	}

	delayTime(callback, time){
		setTimeout(function(){
			callback();
		}, time);
	}
	

	componentDidMount() {
		const { title } = this.props,
			  { modal } = this.refs,
			  { show } = this.state;

		document.querySelector('body')
			.classList.add('modal-open');

		if(show){
			if(title){
				this.refs.active.classList.add('margin-elements');
			}

			this.delayTime(()=>{
				modal.classList.add('show');
			});
		}
	}

	componentDidUpdate() {
		const { show } = this.state,
			  { modal } = this.refs;


		if(show){
			this.delayTime(()=>{
				modal.classList.add('show');
			});
		}
	}
	
	componentWillReceiveProps(nextProps) {
		this.setState({
			show: nextProps.isOpen
		});
	}

	componentWillUnmount() {
		//alert('Unmounted');
		document.querySelector('body')
			.classList.remove('modal-open');
	}

	close(e) {
		e.preventDefault();

		const { modal } = this.refs;

		this.delayTime(()=>{
			modal.classList.add('hide');
		});

		this.delayTime(function(){
			this.props.toggleModal();
		}.bind(this),500)

	}

	render() {
		const { children, title, isOpen } = this.props;
		const { show } = this.state;

		const addTitle = title ? (
			<div className="modal-header"  >
				<div className="modal-title">
					{title}
				</div>
			</div>

		) : null;

		const renderModal = show ? (
			<div className="modal" ref="modal">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-close">
							<a href="#" title="Close" onClick={this.close.bind(this)}>
								<span className="fa fa-times-circle"/>
							</a>
						</div>
						<div className="modal-elements" ref="active">
							{addTitle}
							<div className="modal-body">
								{children}
							</div>
						</div>
					</div>
				</div>
			</div>
		) : null

		return renderModal
	}
}
