import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, { Component } from 'react';
import { Modal, Button, Glyphicon, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import FieldGroup from '../../../Authentication/FieldGroup/FieldGroup.js';
import './UploadModal.css';
import Measure from 'react-measure';

var cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'dxehb7f11',
    api_key: '174331265254727',
    api_secret: 'oLi-kKGDnNRJrCYIrZSyaDmJJ94'
});



export default class UploadModal extends Component {
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onFormChange = this.onFormChange.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
        this.close = this.close.bind(this);
        this.state = {
            uploadedFile: null,
            description: "",
            title: "",
            dimensions: {
                width: -1
            }
        };
    }

    onFileChange(e) {
        var file = e.target.files[0];
        var self = this;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            self.setState({ uploadedFile: reader.result });
        }
    }
    onFormChange(e) {
        var state = e.target.id;
        var value = e.target.value;
        this.setState({ [state]: value });
    }
    close() {
        this.setState({ description: "", title: "", uploadedFile: null });
        this.props.close();
    }
    handleImageUpload() {
        var self = this;
        if (this.state.uploadedFile) {

            cloudinary.uploader.upload(this.state.uploadedFile, function (result) {
                console.log(result);
                self.props.upload({ src: result.public_id, id_user: self.props.id_active_user, description: self.state.description, title: self.state.title }, self.setState({ description: "", title: "", uploadedFile: null }))
            })
            self.props.close();
        }
        else {
            this.close();
        }
    }


    render() {
        const { width } = this.state.dimensions
        return (
            <div>
                <Modal show={this.props.show} onHide={() => this.close()} bsSize="large" animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Preview</Modal.Title>
                    </Modal.Header>
                    <Measure onMeasure={(dimensions) => { this.setState({ dimensions }) }}>
                        <Modal.Body>
                            <img id="preview_image" src={this.state.uploadedFile} alt="" width={width} />
                            {this.state.uploadedFile ?
                                <FieldGroup
                                    id="title"
                                    type="text"
                                    label="Title"
                                    placeholder="Title"
                                    onChange={this.onFormChange}
                                />
                                : null}
                            {this.state.uploadedFile ?
                                <FieldGroup
                                    id="description"
                                    type="textarea"
                                    label="Description"
                                    placeholder="Description"
                                    onChange={this.onFormChange}
                                />
                                : null}
                        </Modal.Body>
                    </Measure>
                    <Modal.Footer className="UploadModal-Footer">
                        <span className="UploadModal-Upload">
                            Upload Image
                     <input id="files" type="file" onChange={this.onFileChange} className="UploadModal-Hide" />
                        </span>
                        <Button bsStyle="success" className="UploadModal-Okay" onClick={() => this.handleImageUpload()}>Okay<Glyphicon glyph="ok" className="UploadModal-Glyph-Ok" /></Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

