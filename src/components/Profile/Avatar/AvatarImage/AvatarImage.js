 import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {Image} from 'cloudinary-react';
import './AvatarImage.css';

export default class AvatarImage extends Component {
    render() {
        return (
                 <div>
                     <Image cloudName="dxehb7f11" publicId={this.props.src} className="AvatarImage" alt="avatar picture" width="200" height="200" crop="thumb"/>
                </div>
        )
    }
}