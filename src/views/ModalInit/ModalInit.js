import React, { Component } from 'react';
import Modal from '../../components/Modal/Modal';

export default
class CarrouselInit extends Component{

    constructor(props){
        super(props);
        this.state={
            show: false
        };
    }

    toggleModal() {
        alert('modal');
    }
    
    render() {
        const { show } = this.state;

        return(
          <div>
            <a href="#" onClick={ () => this.toggleModal }>Show modal</a>
            <Modal
                isOpen={show}>
                <h1>
                    Content
                </h1>
            </Modal>
          </div>
        
        );
    }
}
