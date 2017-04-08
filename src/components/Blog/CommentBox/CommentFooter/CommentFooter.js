import React, {Component} from 'react';
import './CommentFooter.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Glyphicon} from 'react-bootstrap';
import CommentForm from './CommentForm/CommentForm.js';
import classNames from 'classnames';
 export default class CommentFooter extends Component{
constructor(props){
super(props);
this.close=this.close.bind(this);
this.state={open:false};
}
close(){
    this.setState({open:false});
}
   render(){
       const classCommentFooterGlyph={CommentFooterLiked:this.props.liked,CommentFooterGlyph:true};
     return (
         <div className="CommentFooter">
       <span className="CommentFooter-Reply" onClick={()=>this.setState({open:true})}>Reply</span>&nbsp;{this.props.likes}
       <Glyphicon glyph="thumbs-up" className={classCommentFooterGlyph} onClick={()=>this.props.like({id_liker: this.props.id_active_user, id_comment: this.props.id_comment, id_owner: this.props.id_owner})}/>
       {this.state.open ?
       <CommentForm
          close={this.close}
          post={this.props.post}
          id_owner={this.props.id_owner}
          id_parent={this.props.id_comment}
          id_active_user={this.props.id_active_user}
       /> 
       : null}
       </div>
     )
   }
 }
