import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {Row,Col} from 'react-bootstrap';
import './ProfileHeader.css';

export default class ProfileHeader extends Component{

    render(){
        return(
                <div className="ProfileHeader">
                   <h2> {this.props.title} </h2>
                   <h4 className="ProfileHeader-H4">11/13/2017</h4>
                </div>
        )
    }
}