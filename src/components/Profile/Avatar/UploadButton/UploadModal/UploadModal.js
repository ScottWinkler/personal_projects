import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {Modal,Button,Glyphicon} from 'react-bootstrap';
import './UploadModal.css';
var cloudinary=require('cloudinary');

cloudinary.config({ 
  cloud_name: 'dxehb7f11', 
  api_key: '174331265254727', 
  api_secret: 'oLi-kKGDnNRJrCYIrZSyaDmJJ94' 
});



export default class UploadModal extends Component {
 constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleImageUpload=this.handleImageUpload.bind(this);
        this.state = {
            uploadedFile: null,
            uploadedFileCloudinaryUrl: ''
        };
    }
     onChange(e) {
        var file = e.target.files[0];
        console.log(file);
        var self=this;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            console.log(self);
            self.setState({ uploadedFile: reader.result });

        }
    }

    handleImageUpload() {
        if(this.state.uploadedFile){
            cloudinary.uploader.upload(this.state.uploadedFile, function (result) {
                console.log(result)

            });}
            if(this.props.src!=='cat_profile-512_dceqtz')
            cloudinary.uploader.destroy(this.props.src,function(result){ console.log(result) },{ invalidate: true });;
            this.props.close();
        }

    render() {

        return (
            <div>
            <Modal show={this.props.show} onHide={()=>this.props.close()}>
                <Modal.Header closeButton>
                    <Modal.Title>Preview</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <img id="preview_image" src={this.state.uploadedFile} />
                </Modal.Body>
                <Modal.Footer className="UploadModal-Footer">
                    <span  className="UploadModal-Upload">
                     <input id="files" type="file" onChange={this.onChange} />
                    </span>
                    <span  className="UploadModal-Okay">
                     <Button bsStyle="success" onClick={()=>this.handleImageUpload()}>Okay<Glyphicon glyph="ok" className="UploadModal-Glyph-Ok"/></Button>
                    </span>
                </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

