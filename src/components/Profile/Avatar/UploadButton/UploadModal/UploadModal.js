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
        this.close=this.close.bind(this);
        this.state = {
            uploadedFile: null,
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
     close() {
         this.setState({ uploadedFile: null });
         this.props.close();
     }
     handleImageUpload() {
         if (this.state.uploadedFile) {
             var self = this;
             cloudinary.uploader.upload(this.state.uploadedFile, function (result) {
                console.log(result);
                  self.props.update({ src: result.public_id, username: self.props.username });
                 if (self.props.src !== 'DEFAULT_CAT_PIC') {
                     cloudinary.uploader.destroy(self.props.src, function (result) {console.log(result);
                     }, { invalidate: true });
                 }
                
             }
             )
         }
         this.close();
     }


    render() {

        return (
            <div>
            <Modal show={this.props.show} onHide={()=>this.close()}>
                <Modal.Header closeButton>
                    <Modal.Title>Preview</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <img id="preview_image" src={this.state.uploadedFile} alt=""/>
                </Modal.Body>
                <Modal.Footer className="UploadModal-Footer">
                    <span className="UploadModal-Upload">
                        Upload Image
                     <input id="files" type="file" onChange={this.onChange} className="UploadModal-Hide"/>
                     </span>
                     <Button bsStyle="success" className="UploadModal-Okay"onClick={()=>this.handleImageUpload()}>Okay<Glyphicon glyph="ok" className="UploadModal-Glyph-Ok"/></Button>
                </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

