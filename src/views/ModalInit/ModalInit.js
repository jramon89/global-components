import React, { Component } from 'react';
import Modal from '../../components/Modal/Modal';
import image from '../../../static/images/image08.jpg';
export default
class CarrouselInit extends Component{

    constructor(props){
        super(props);
        this.state={
            show: true,
            image: "http://lorempixel.com/900/400/animals/",
        };
    }

    toggleModal() {
       this.setState({
            show: !this.state.show
       });
    }
    componentWillMount() {
        localStorage.setItem(
            'title',
            'Modal'
        );
    }
    render() {
        const { show } = this.state;

        return(
          <div>
            <button onClick={ this.toggleModal.bind(this) }>Show modal</button>
            <Modal
                isOpen={show}
                toggleModal={this.toggleModal.bind(this)}>
                <img src={image} alt="animals"/>
            </Modal>
          </div>
        
        );
    }
}
