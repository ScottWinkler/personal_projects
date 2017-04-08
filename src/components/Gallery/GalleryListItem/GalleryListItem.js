import React, {Component} from 'react';
import {Image,Transformation} from 'cloudinary-react';
import './GalleryListItem.css';
import ImageModal from './ImageModal/ImageModal.js';
export default class GalleryListItem extends Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false }
    }
    render() {
        return (
            <li className="GalleryListItem">
                <Image cloudName="dxehb7f11" publicId={this.props.src} className="GalleryImage" onClick={()=>{this.setState({showModal:true})}} width="300" height="300" crop="thumb"/>
                <ImageModal src={this.props.src} show={this.state.showModal} close={() => { this.setState({ showModal: false }) }} />
            </li>
        )
    }
}