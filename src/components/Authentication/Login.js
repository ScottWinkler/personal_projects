import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {Panel, Button} from 'react-bootstrap';
import './Login.css';
import ErrorMsg from './ErrorMsg/ErrorMsg.js';
import FieldGroup from './FieldGroup/FieldGroup.js';
import {Link} from 'redux-little-router';
 export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            password:"",
            email:"",
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.validEmail=this.validEmail.bind(this);
        this.validPassword=this.validPassword.bind(this);
        this.getErrorMessage=this.getErrorMessage.bind(this);
    }
    handleChange(e){
        var state = e.target.id;
        var value=e.target.value;
        console.log(state,value);
        this.setState({[state]:value});
        this.props.sendError(null);
    }

    handleSubmit(e){
        if(!this.validEmail()){
            return;
        }
        if(!this.validPassword()){
            return
        }
        var state={
            email:this.state.email,
            password:this.state.password,
        };
        this.props.handleSubmit(state);
    }

    validEmail(){
         if (!this.props.error&&this.props.error==="NO_EMAIL_EXISTS") {
            return false;
        }
        return true;
    }
    validPassword(){
        if (!this.props.error&&this.props.error==="PASSWORD_INCORRECT") {
            return false;
        }
        return true;
    }
    getErrorMessage() {
        if (!this.props.error) {
            return null;
        }
        var message = "";
        switch (this.props.error) {
            case "NO_EMAIL_EXISTS":
                message = "The E-mail you entered doesn't belong to an account.";
                break;
            case "PASSWORD_INCORRECT":
                message = "Sorry, your password was incorrect. Please double-check your password.";
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
        <Panel className="Login">
        <h2 className="Login-Header">Kitty Fanclub</h2>
        <form>
            <FieldGroup 
                id="email"
                type="email"
                label="E-mail Address"
                placeholder="Email"
                onChange={this.handleChange}
                validationState={this.validEmail() ? null : 'error'}
                value={this.state.email}
                autoComplete="email"
            />

            <FieldGroup 
                id="password"
                type="text"
                label="Password"
                placeholder="Enter Password"
                onChange={this.handleChange}
                validationState={this.validPassword() ? null : 'error'}
                value={this.state.password}
                autoComplete="password"
            />
            <Button type="button" bsStyle="info" className="Login-InputButton" disabled={this.props.isValidating ? true : false} onClick={()=>{this.handleSubmit()}}> Log in  </Button>
        </form>
        {this.props.error? <ErrorMsg message={this.getErrorMessage()}/> : null}
         <p>New user? Click to <Link href='/signup' >Sign up</Link></p>
     </Panel>
    );}}



