import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {Image,Glyphicon,Button} from 'react-bootstrap';
import UploadButton from './UploadButton/UploadButton.js';
import AvatarImage from './AvatarImage/AvatarImage.js';
import './Avatar.css';

//import AvatarPopover from './AvatarPopover/AvatarPopover.js'
export default class Avatar extends Component{

    render(){
        return(
            <div className="Avatar">
                 <UploadButton  upload={this.props.upload} src={this.props.src}/>
                 <AvatarImage  src={this.props.src}/>
            </div>

        )
    }
}