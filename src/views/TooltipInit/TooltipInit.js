import React, { Component } from 'react';
import Tooltip from '../../components/Tooltip/Tooltip';

export default
class TooltipInit extends Component{

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
    componentWillMount() {
        localStorage.setItem(
            'title',
            'Tooltip'
        );
    }
    render() {
        const { show } = this.state;

        return(
            <div>
                <Tooltip hoverElement={(
                    <div>Show tooltip</div>
                )}>
                    <div>
                        Content Tooltip
                    </div>
                </Tooltip>
            </div>
        
        );
    }
}
