import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {Modal,Button,Glyphicon} from 'react-bootstrap';
import './ImageModal.css';
import {Image,Transformation} from 'cloudinary-react';
import Measure from 'react-measure';
export default class ImageModal extends Component {
constructor(props){
    super(props);
    this.state={
        dimensions:{
            width:-1,
            height:-1
        }
    }
}

    render() {
        const { width, height } = this.state.dimensions
        return (

            <div>
                <Modal show={this.props.show} onHide={() => this.props.close()}  bsSize="large" animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Image Title</Modal.Title>
                    </Modal.Header>
                    <Measure
                        onMeasure={(dimensions) => {
                            this.setState({ dimensions })
                        }}
                    >
                        <Modal.Body>
                            <div className="ImageContainer">
                                <Image cloudName="dxehb7f11" publicId={this.props.src} className="Gallery-Thumbnail" dpr="auto" crop="scale" width={width-40}/>
                            </div>
                        </Modal.Body>
                    </Measure>
                    <Modal.Footer className="UploadModal-Footer">
                        <span >
                            <Button>Settings &nbsp;<Glyphicon glyph="cog" /></Button>&nbsp;
                        </span>
                        <Button bsStyle="success" className="UploadModal-Okay">Okay<Glyphicon glyph="ok" className="UploadModal-Glyph-Ok" /></Button>
                    </Modal.Footer>
                </Modal>
            </div>
           
        )
    }
}

