import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import './ProfileItemValue.css';

export default class ProfileItemValue extends Component{

    render(){
        return(
                 <li className="ProfileItemValue" ><span className="ProfileItemValue-Text">{this.props.value}</span></li>
        )
    }
}