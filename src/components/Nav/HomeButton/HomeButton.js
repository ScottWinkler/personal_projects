import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';
import './HomeButton.css';

export default class HomeButton extends Component{

    render(){
        return(
                   <li className="HomeButton"><Glyphicon glyph="home" onClick={()=>{this.props.push("/")}}/></li>
        )
    }
}