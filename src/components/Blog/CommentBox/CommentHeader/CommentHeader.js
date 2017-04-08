import React, {Component} from 'react';
import classNames from 'classnames';
import './CommentHeader.css';
 export default class CommentHeader extends Component{

   render(){
     var usernameClass = classNames({ 'admin':this.props.account_permissions === 'a', 'moderator': this.props.account_permissions === 'b', 'standard':this.props.account_permissions==='c' },)
     return (
       <span>
         <span className={usernameClass}>{this.props.username}</span>&nbsp;<small>{this.props.datetime_created}</small>
       </span>
     )
   }
 }
