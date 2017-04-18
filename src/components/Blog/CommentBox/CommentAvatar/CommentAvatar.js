import React, {Component} from 'react';
import {Image} from 'cloudinary-react';
import './CommentAvatar.css';

 export default class CommentAvatar extends Component{
   render(){
       return(

         <Image cloudName="dxehb7f11" publicId={this.props.src} className="CommentAvatar" alt="avatar picture" dpr="auto" crop="fit" width={64} height={64}/>
   
       )
   }
 }