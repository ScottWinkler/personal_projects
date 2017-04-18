import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {Modal,Button,Glyphicon,OverlayTrigger,Popover,ButtonToolbar} from 'react-bootstrap';
import './ImageModal.css';
import {Image} from 'cloudinary-react';
import Measure from 'react-measure';
import SettingsModal from './SettingsModal/SettingsModal.js';
export default class ImageModal extends Component {
constructor(props){
    super(props);
    this.state={
        showModal: false,
        dimensions:{
            width:-1
        }
    }
}

    render() {
        const { width} = this.state.dimensions;

        return (

            <div>
                <Modal show={this.props.show} onHide={() => this.props.close()}  bsSize="large" animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.data.title ? this.props.data.title : 'Untitled Image'}</Modal.Title>
                    </Modal.Header>
                    <Measure
                        onMeasure={(dimensions) => {
                            this.setState({ dimensions })
                        }}
                    >
                        <Modal.Body>
                            <div className="ImageContainer">
                                <Image cloudName="dxehb7f11" publicId={this.props.data.src} className="Gallery-Thumbnail" dpr="auto" crop="scale" width={width-40}/>
                                <p className="ImageModal-Description">{this.props.data.description}</p>
                            </div>
                        </Modal.Body>
                    </Measure>
                    <Modal.Footer className="ImageModal-Footer">
                       {this.props.id_active_user===this.props.data.id_user ? <Button onClick={()=>{this.setState({showModal:true})}}><Glyphicon glyph="cog" /></Button> : null}
                       <Button bsStyle="success" className="ImageModal-Btn" onClick={()=>{this.props.close()}}>Nice Kitty!<Glyphicon glyph="ok" className="ImageModal-Glyph" /></Button>
                    </Modal.Footer>
                </Modal>
                    <SettingsModal show={this.state.showModal} id_active_user={this.props.id_active_user} update={this.props.update} data={this.props.data} delete={this.props.delete} close={() => { this.setState({ showModal: false }) }}/>
            </div>
           
        )
    }
}

