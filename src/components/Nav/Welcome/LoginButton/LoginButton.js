import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'redux-little-router';
import './LoginButton.css';
export default class LoginButton extends Component{

    
    render(){
        return(
            <div>
             Want to join? <Link href="/signup">Sign up!</Link>
            <Button bsStyle="success" className="LoginButton"  onClick={()=>{this.props.push('/login')}}>Log in</Button>
           </div>
        )
    }
}
    
    
