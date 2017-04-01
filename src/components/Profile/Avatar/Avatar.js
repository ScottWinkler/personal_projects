import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import UploadButton from './UploadButton/UploadButton.js';
import AvatarImage from './AvatarImage/AvatarImage.js';
import './Avatar.css';

//import AvatarPopover from './AvatarPopover/AvatarPopover.js'
export default class Avatar extends Component{

    render(){
        return(
            <div className="Avatar">
                 <UploadButton  update={this.props.update} src={this.props.src}/>
                 <AvatarImage  src={this.props.src}/>
            </div>

        )
    }
}