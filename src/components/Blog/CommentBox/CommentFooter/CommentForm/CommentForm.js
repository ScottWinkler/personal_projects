import React, {Component} from 'react';
import './CommentForm.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {FormControl,Button} from 'react-bootstrap';

 export default class CommentForm extends Component{
constructor(props){
    super(props);
    this.close=this.close.bind(this);
    this.post=this.post.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.state={reply_text:""};
}
close(){
this.setState({reply_text:""});
this.props.close();
}
    handleChange(e){
        var value=e.target.value;
        this.setState({reply_text:value});
    }
    post(){
        var input ={id: this.props.id_active_user,id_owner: this.props.id_owner, id_parent: this.props.id_parent, message: this.state.reply_text};
        this.props.post(input);
        this.close();
    }
   render(){
     return (
         <div className="CommentForm">
             <FormControl componentClass="textarea" className="CommentForm-TextArea" onChange={this.handleChange} value={this.state.reply_text}/>
             <div className="CommentForm-Buttons">
                 <Button className="CommentForm-Button" onClick={()=>this.close()}>Cancel</Button>
                 <Button className="CommentForm-Button" bsStyle="success" onClick={()=>this.post()}>Okay</Button>
                 </div>

         </div>
     )
   }
 }
