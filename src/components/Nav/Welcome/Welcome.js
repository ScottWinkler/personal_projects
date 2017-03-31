import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import './Welcome.css';
import LoginButton from './LoginButton/LoginButton.js';
import WelcomeMessage from './WelcomeMessage/WelcomeMessage.js';
import {Link} from 'redux-little-router';
export default class Welcome extends Component{

    render(){

    const link = <Link href="/">Sign Out</Link>
        return(
                <li className="Welcome">
                 {this.props.isAuthenticated ? <WelcomeMessage username={this.props.username}/>  : null }
                {this.props.isAuthenticated ? link: <LoginButton push={this.props.push}/> }
                </li> 
        )
    }
}