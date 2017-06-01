import React, { Component, PropTypes } from 'react';

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
		const { title, isOpen } = this.props;
		const { modal } = this.refs;

		document.querySelector('body')
			.classList.add('modal-open');
		
		if(title){
			this.refs.active.classList.add('margin-elements');
		}
		alert();
		if(isOpen){
			this.delayTime(()=>{
				modal.classList.add('show');
			});	
		}

		
	}

	componentWillUnmount() {
		alert();
		document.querySelector('body')
			.classList.remove('modal-open');
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
	}

	close(e) {
		e.preventDefault();

		const { modal } = this.refs;

		this.delayTime(()=>{
			//modal.classList.add('hide');
		});

		this.delayTime(function(){
			//this.props.toggleModal();
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

		const renderModal = isOpen ? (
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
