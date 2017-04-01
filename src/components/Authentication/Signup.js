import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {Panel, Button} from 'react-bootstrap';
import ErrorMsg from './ErrorMsg/ErrorMsg.js';
import FieldGroup from './FieldGroup/FieldGroup.js';
import './Signup.css';
import {Link} from 'redux-little-router';
 export default class Signup extends Component{
    constructor(props){
        super(props);
        this.state={
            password:"",
            passwordConfirmation:"",
            email: "",
            username:"",
        };

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.passwordsMatch=this.passwordsMatch.bind(this);
        this.validPassword=this.validPassword.bind(this);
        this.validEmail=this.validEmail.bind(this);
        this.validUserName=this.validUserName.bind(this);
    }

    handleChange(e){
        var state = e.target.id;
        var value=e.target.value;
        console.log(state,value);
        this.setState({[state]:value});
        this.props.sendError(null);
    }

    handleSubmit(){
        if(!this.validUserName()){
            this.props.sendError("INVALID_USERNAME");
            return;
        }
        if(!this.validEmail()){
            this.props.sendError("INVALID_EMAIL");
            return;
        }
        if(!this.passwordsMatch()){
            this.props.sendError("PASSWORDS_NOT_MATCHING");
            return;
        }
        if(!this.validPassword()){
            this.props.sendError("INVALID_PASSWORD");
            return
        }
        var state={
            username:this.state.username,
            password:this.state.password,
            email: this.state.email
        };
        this.props.handleSubmit(state);
    }

    validEmail(){
        if (this.props.error&&this.props.error==="EMAIL_EXISTS"){
            return true;
        }
        var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(this.state.email)&&this.state.email.length>0;
    }
    validPassword(){
        return (this.state.password.length>3)&&this.passwordsMatch();
    }
    validUserName(){
        return (this.state.username.length>0)&&(this.props.error ? this.props.error !== "ACCOUNT_EXISTS" : true );
    }
    passwordsMatch(){
        return (this.state.password===this.state.passwordConfirmation);
    }

    getErrorMessage() {
        if (!this.props.error) {
            return null;
        }
        var message = "";
        switch (this.props.error) {
            case "INVALID_USERNAME":
                message = "Please enter a username and try again.";
                break;
            case "ACCOUNT_EXISTS":
                message = "The username you entered already belongs to an account. Please enter a new username and try again.";
                break;
            case "EMAIL_EXISTS":
                message = "The E-mail you entered already belongs to an account.";
                break;
            case "PASSWORDS_NOT_MATCHING":
                message = "Sorry, your password and password confirmation do not match. Please double-check your password. Also, ensure your password is at least 4 characters long.";
                break;
            case "INVALID_PASSWORD":
                message = "Sorry, your password must be at least 4 characters long. Please double-check your password.";
                break;
            case "INVALID_EMAIL":
                message = "Sorry, your email is not valid. Please enter a valid email address e.g. name@example.com.";
                break;
            case "DATABASE_ERROR":
                message = "There was a problem connecting to the server. Please try again later.";
                break;
            default:
                break;
        }
        return message;
    }

    render(){
    return(
        <Panel className="Signup">
        <h2 className="Signup-Header">Kitty Fanclub</h2>
        <form>
            <FieldGroup 
                id="username"
                type="text"
                label="Username"
                placeholder="Username"
                onChange={this.handleChange}
                validationState={this.props.error&&(!this.validUserName()) ? 'error' : null }
                value={this.state.username}
            />

            <FieldGroup 
                id="email"
                type="email"
                label="E-mail Address"
                placeholder="Email"
                onChange={this.handleChange}
                validationState={this.props.error&&(!this.validEmail()) ? 'error' : null}
                value={this.state.email}
            />
            <FieldGroup 
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                onChange={this.handleChange}
                validationState={this.props.error&&(!this.validPassword()) ? 'error' : null}
                value={this.state.password}
            />

            <FieldGroup 
                id="passwordConfirmation"
                type="password"
                label="Re-enter Password"
                placeholder="Confirm Password"
                onChange={this.handleChange}
                validationState={this.props.error&&(!this.validPassword()) ? 'error' : null}
                value={this.state.passwordConfirmation}
            />
            <Button type="button" bsStyle="info" className="Signup-InputButton" disabled={this.props.isValidating ? true : false} onClick={()=>{this.handleSubmit()}}> Create Account  </Button>
        </form>
        {this.props.error? <ErrorMsg message={this.getErrorMessage()}/> : null}
        <p>Already have an account? <Link href='/login' >Log in!</Link></p>
     </Panel>
    );}
}
