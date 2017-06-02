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
            <span onClick={ this.toggleModal.bind(this) }>Show modal</span>
            <Modal
                isOpen={show}
                toggleModal={this.toggleModal.bind(this)}>
                <h1>
                    Content
                </h1>
            </Modal>
          </div>
        
        );
    }
}
