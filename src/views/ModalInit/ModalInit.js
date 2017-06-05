import React, { Component } from 'react';
import Modal from '../../components/Modal/Modal';

export default
class CarrouselInit extends Component{

    constructor(props){
        super(props);
        this.state={
            show: true
        };
    }

    toggleModal() {
       this.setState({
            show: !this.state.show
       });
    }
    
    render() {
        const { show } = this.state;

        return(
          <div>
            <button onClick={ this.toggleModal.bind(this) }>Show modal</button>
            <Modal
                isOpen={show}
                toggleModal={this.toggleModal.bind(this)}>
                <img src="http://lorempixel.com/900/400/animals/" alt="animals"/>
            </Modal>
          </div>
        
        );
    }
}
