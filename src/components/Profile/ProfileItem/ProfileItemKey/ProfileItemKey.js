import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import './ProfileItemKey.css';

export default class ProfileItemKey extends Component{

    render(){
        return(
                 <li className="ProfileItemKey" ><span className="ProfileItemKey-Text">{this.props.title}</span></li>
        )
    }
}