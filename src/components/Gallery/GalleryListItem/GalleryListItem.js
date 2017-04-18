import React, {Component} from 'react';
import {Image} from 'cloudinary-react';
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
                <Image cloudName="dxehb7f11" publicId={this.props.data.src} className="GalleryImage" onClick={()=>{this.setState({showModal:true})}} width="300" height="300" crop="thumb"/>
                <ImageModal data={this.props.data} show={this.state.showModal} id_active_user={this.props.id_active_user} update={this.props.update} delete={this.props.delete} close={() => { this.setState({ showModal: false }) }} />
            </li>
        )
    }
}