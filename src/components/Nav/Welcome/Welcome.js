import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import './Welcome.css';
import LoginButton from './LoginButton/LoginButton.js';
import WelcomeMessage from './WelcomeMessage/WelcomeMessage.js';
export default class Welcome extends Component{

    render(){

    const link = <a onClick={()=>{this.props.logout()}}>Sign Out</a>
        return(
                <li className="Welcome">
                 {this.props.isAuthenticated ? <WelcomeMessage username={this.props.username}/>  : null }
                {this.props.isAuthenticated ? link: <LoginButton push={this.props.push}/> }
                </li> 
        )
    }
}