import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
export default class WelcomeMessage extends Component{

    render(){
        return(
            <span>Welcome, {this.props.username}!<br/></span>
        )
    }
}
    
    
