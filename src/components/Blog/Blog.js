import './Blog.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {Button,Glyphicon} from 'react-bootstrap';
import CommentBox from './CommentBox/CommentBox.js';
 export default class Blog extends Component{

   render(){
       const threads =  this.props.blogData ?
            this.props.blogData.commentData
            .filter((data) => !data.id_parent)
            .map((data, index) => 
            <li key={data.id}><CommentBox  blogData={this.props.blogData} data={data} id_active_user="13" like={this.props.like} post={this.props.post}/></li>)
            : null;
       
       return (
           <div className="Blog">
               <Button onClick={()=>{this.props.refresh({id:13})}}><Glyphicon glyph="refresh"/></Button>
               <ul className="Blog-Threads">
                   {threads}
               </ul>
           </div>
    )
   }
 }