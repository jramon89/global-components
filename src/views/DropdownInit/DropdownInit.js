import React, { Component } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';

export default
class DropdownInit extends Component{

    constructor(props){
        super(props);
        this.state={
            open: false,
            selected: null
        };
    }

    select(e){
        this.setState({
            open: false,
            selected: e.target.innerText
        });
    }

    render() {
        const { open, selected } = this.state;
        const style = {
            ul:{
                margin: 0,
                padding: 0,
                lineHeight: 2
            },
            li:{
                listStyleType: "none",
                cursor: "pointer"
            }
        }
        
        return(
              <Dropdown
                title="Select option"
                open={open}
                selected={selected}>
                    <ul style={style.ul}>
                        {

                            [1,2,3,4,5].map((v,i)=>{
                               return(
                                    <li 
                                        key={i} 
                                        onClick={ (e) => {this.select(e)}} 
                                        style={style.li}>Option {i}
                                    </li>
                                    )
                            })
                        }
                    </ul>
              </Dropdown>
        
        );
    }
}
