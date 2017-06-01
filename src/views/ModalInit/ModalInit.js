import React, { Component } from 'react';
import Modal from '../../components/Modal/Modal';

export default
class CarrouselInit extends Component{

    constructor(props){
        super(props);
        this.state={};
    }

    render() {

        return(
          <Modal
            isOpen={true}>
            <h1>
                Content
            </h1>
          </Modal>
        );
    }
}
