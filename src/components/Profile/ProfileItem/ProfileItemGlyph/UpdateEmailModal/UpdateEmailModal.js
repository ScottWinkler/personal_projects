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
            this.props.sendError("INVALID_EMAIL");
            return;
        }
        if(!this.validPassword()){
            return
        }
        var state={
            email:this.state.email,
            password:this.state.password,
            username:this.props.username
        };
        var self=this;
        var callback = () => {
            if(!self.props.error){
            self.close();}};
        this.props.update(state,callback);
    }
close(){
    this.setState({
                password: "",
                email: ""
            })
            this.props.sendError(null);
            this.props.close();
}
     validEmail(){
         if(this.props.error&&(this.props.error==="INVALID_EMAIL"||this.props.error==="EMAIL_EXISTS")){
             return false;
         }
        var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(this.state.email)&&this.state.email.length>0;
    }

    validPassword(){
        if (this.props.error&&this.props.error==="PASSWORD_INCORRECT") {
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
            case "PASSWORD_INCORRECT":
                message = "Sorry, your password was incorrect. Please double-check your password.";
                break;
            case "DATABASE_ERROR":
                message = "There was a problem connecting to the server. Please try again later.";
                break;
            case "INVALID_EMAIL":
                message = "Sorry, your email is not valid. Please enter a valid email address e.g. name@example.com.";
                break;
            case "EMAIL_EXISTS":
                message = "The E-mail you entered already belongs to an account.";
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
                    <Modal.Title>Edit Your E-mail Address</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    
        <form>
            <FieldGroup 
                id="email"
                type="email"
                label="New E-mail Address"
                placeholder="Email"
                onChange={this.handleChange}
                validationState={this.props.error&&(!this.validEmail()) ? 'error' : null }
                value={this.state.email}
            />

            <FieldGroup 
                id="password"
                type="password"
                label="Please Verify Your Password"
                placeholder="Enter Password"
                onChange={this.handleChange}
                validationState={this.props.error&&(!this.validPassword()) ? 'error' : null }
                value={this.state.password}
            />
        </form>
        {this.props.error? <ErrorMsg message={this.getErrorMessage()}/> : null}


                </Modal.Body>
                <Modal.Footer className="UploadModal-Footer">

                     <Button className="UploadModal-Okay" bsStyle="success"  disabled={this.props.isValidating ? true : false} onClick={()=>{this.handleSubmit()}}>Save<Glyphicon glyph="ok" className="UploadModal-Glyph-Ok"/></Button>

                </Modal.Footer>
                </Modal>
            </div>)}}