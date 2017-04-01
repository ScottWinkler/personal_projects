import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {Modal,Button,Glyphicon} from 'react-bootstrap';
 
  import FieldGroup from '../../../../Authentication/FieldGroup/FieldGroup.js';     
    import ErrorMsg from '../../../../Authentication/ErrorMsg/ErrorMsg.js';
       export default class UpdateModal extends Component{
    constructor(props){
        super(props);
        this.state={
            password:"",
            newPassword:"",
            newPasswordConfirmation:"",
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.validPassword=this.validPassword.bind(this);
        this.getErrorMessage=this.getErrorMessage.bind(this);
        this.close=this.close.bind(this);
    }
    handleChange(e){
        var state = e.target.id;
        var value=e.target.value;
        console.log(state,value);
        this.setState({[state]:value});
        this.props.sendError(null);
    }

    handleSubmit(e){
        if(!this.passwordsMatch()){
            this.props.sendError("PASSWORDS_NOT_MATCHING");
            return;
        }
        if(!this.validPassword()){
            this.props.sendError("INVALID_PASSWORD");
            return
        }
        var self=this;
        var callback = () => {
              if(!self.props.error){
            self.close();}}
        var state ={
            password: this.state.password,
            newPassword: this.state.newPassword,
            newPasswordConfirmation: this.state.newPasswordConfirmation,
            username: this.props.username
        }
        this.props.update(state,callback);
    }
    close(){
         this.setState({
                password: "",
                newPassword:"",
                newPasswordConfirmation: ""
            })
            this.props.sendError(null);
            this.props.close();
    }
    validPassword(){
        return (this.state.newPassword.length>3)&&this.passwordsMatch();
    }
    passwordsMatch(){
        return (this.state.newPassword===this.state.newPasswordConfirmation);
    }
    getErrorMessage() {
        if (!this.props.error) {
            return null;
        }
        var message = "";
        switch (this.props.error) {
            case "PASSWORD_INCORRECT":
                message = "Sorry, your password was incorrect. Please double-check your password.";
                break;
            case "DATABASE_ERROR":
                message = "There was a problem connecting to the server. Please try again later.";
                break;
            case "PASSWORDS_NOT_MATCHING":
                message = "Sorry, your new password and password confirmation do not match. Please double-check your password. Also, ensure your new password is at least 4 characters long.";
                break;
            case "INVALID_PASSWORD":
                message = "Sorry, your new password must be at least 4 characters long. Please double-check your new password.";
                break;
            default:
                break;
        }
        return message;
    }
    render(){
        return(
        <div >
            <Modal show={this.props.show} onHide={()=>this.close()} >
                <Modal.Header closeButton>
                    <Modal.Title>Change Your Password</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    
        <form>
            <FieldGroup 
                id="password"
                type="password"
                label="Old Password"
                placeholder="Old Password"
                onChange={this.handleChange}
                validationState={this.props.error&&this.props.error==="INVALID_PASSWORD" ? 'error' : null }
                value={this.state.password}
                autoComplete="password"
            />
            <FieldGroup 
                id="newPassword"
                type="password"
                label="New Password"
                placeholder="New Password"
                onChange={this.handleChange}
                validationState={this.props.error&&(!this.validPassword()) ? 'error' : null }
                value={this.state.newPassword}
            />
            <FieldGroup 
                id="newPasswordConfirmation"
                type="password"
                label="Re-enter New Password"
                placeholder="Confirm Password"
                onChange={this.handleChange}
                validationState={this.props.error&&(!this.validPassword()) ? 'error' : null }
                value={this.state.newPasswordConfirmation}
            />
               
        </form>
        {this.props.error? <ErrorMsg message={this.getErrorMessage()}/> : null}


                </Modal.Body>
                <Modal.Footer className="UploadModal-Footer">

                     <Button className="UploadModal-Okay" bsStyle="success"  disabled={this.props.isValidating ? true : false} onClick={()=>{this.handleSubmit()}}>Save<Glyphicon glyph="ok" className="UploadModal-Glyph-Ok"/></Button>

                </Modal.Footer>
                </Modal>
            </div>)}}