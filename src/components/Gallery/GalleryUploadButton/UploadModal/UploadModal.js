import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {Modal,Button,Glyphicon} from 'react-bootstrap';
import './UploadModal.css';
import Measure from 'react-measure';

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
            publicID: this.props.src ? this.props.src : null,
            dimensions:{
            width:-1,
            height:-1
        }
        };
    }

     onChange(e) {
        var file = e.target.files[0];
        var self=this;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            self.setState({ uploadedFile: reader.result });
        }
    }

     handleImageUpload() {
        var self = this;
         if (this.state.uploadedFile) {
             cloudinary.uploader.upload(this.state.uploadedFile, function (result) {
                 console.log(result);
                 self.props.update({ src: result.public_id, username: self.props.username });
             })
         }
         this.props.close();
     }


    render() {
 const { width, height } = this.state.dimensions
        return (
            <div>
            <Modal show={this.props.show} onHide={()=>this.props.close()} bsSize="large" animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Preview</Modal.Title>
                </Modal.Header>
                <Measure onMeasure={(dimensions) => {this.setState({ dimensions })}}>
                <Modal.Body>
                  <img id="preview_image" src={this.state.uploadedFile} alt="" width={width}/>
                </Modal.Body>
                </Measure>
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

