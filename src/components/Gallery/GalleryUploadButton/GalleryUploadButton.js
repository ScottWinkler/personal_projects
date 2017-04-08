import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import './GalleryUploadButton.css';
import {Button,Glyphicon} from 'react-bootstrap';
import UploadModal from './UploadModal/UploadModal.js';
export default class GalleryUploadButton extends Component {

    constructor(props) {
        super(props);
        this.state = { showModal: false }
    }

    render() {
        return (
            <div className="GalleryUploadButton">
                <Button bsStyle="primary" className="GalleryUploadButton-Btn" onClick={()=>{this.setState({showModal:true})}}>Upload Image</Button>
                <UploadModal src={this.props.src} username={this.props.username} show={this.state.showModal} update={this.props.update} close={() => { this.setState({ showModal: false }) }} />
            </div>
        )
    }
}