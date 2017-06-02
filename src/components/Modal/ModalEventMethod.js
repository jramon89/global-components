import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default
class Modal extends Component {

	static propTypes = {
		children: PropTypes.element,
		header: PropTypes.object,
		footer: PropTypes.object,
		title: PropTypes.object,
		isOpen: PropTypes.bool,
		toggleModal: PropTypes.func,
		eventElement: PropTypes.object
	}

	constructor(props) {
		super(props);
		this.state={
			show: false
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
		const { title } = this.props;
		const { modal } = this.refs;

		if(this.state.show){
			document.querySelector('body')
				.classList.add('modal-open');

			this.delayTime(()=>{
				modal.classList.add('show');
			});

		}
		
		if(title){
			this.refs.active.classList.add('margin-elements');
		}

		
	}
	componentDidUpdate() {
		const { modal } = this.refs;

		if(this.state.show){
			document.querySelector('body')
				.classList.add('modal-open');

			this.delayTime(()=>{
				modal.classList.add('show');
			});

		}
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

	open() {
		alert('open');
		this.setState({show: true});
	}
	remove(e) {
		
		e.preventDefault();
		alert('close');
		this.setState({show: false});	
	}

	render() {
		const { children, title, isOpen, eventElement } = this.props;

		const addTitle = title ? (
			<div className="modal-header"  >
				<div className="modal-title">
					{title}
				</div>
			</div>

		) : null;

		const event = (
			
				<div onClick={this.open.bind(this)}>
					{eventElement}
				</div>
			
		); 

		const renderModal = isOpen || this.state.show ? (
			<div className="modal" ref="modal">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-close">
							<a href="#" title="Close" onClick={this.remove.bind(this)}>
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

		return (
			<div>
				{event}
				{renderModal}
			</div>
		);
	}
}
