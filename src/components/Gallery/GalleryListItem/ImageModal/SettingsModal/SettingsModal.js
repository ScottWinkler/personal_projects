import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {Modal,Button,Glyphicon} from 'react-bootstrap';
import FieldGroup from '../../../../Authentication/FieldGroup/FieldGroup.js';
import './SettingsModal.css';
var cloudinary=require('cloudinary');

cloudinary.config({ 
  cloud_name: 'dxehb7f11', 
  api_key: '174331265254727', 
  api_secret: 'oLi-kKGDnNRJrCYIrZSyaDmJJ94' 
});

export default class SettingsModal extends Component {
constructor(props){
    super(props);
    this.onFormChange=this.onFormChange.bind(this);
    this.close=this.close.bind(this);
    this.delete=this.delete.bind(this);
    this.update=this.update.bind(this);
    this.state={
        title:this.props.data.title,
        description:this.props.data.description
    }
}
    onFormChange(e) {
        var state = e.target.id;
        var value = e.target.value;
        this.setState({ [state]: value });
    }
    close(){
        this.setState({title:this.props.data.title,description:this.props.data.description})
        this.props.close();
    }
    delete(){
        var self=this;
         cloudinary.uploader.destroy(this.props.data.src, function (result) {
             self.props.delete({id_image:self.props.data.id,id_user:self.props.id_active_user});
          }, { invalidate: true });
    }
    update(){
        this.props.update({id_image:this.props.data.id,title:this.state.title,description:this.state.description,id_user:this.props.id_active_user});
        this.close();
    }
    render() {
        return (

            <div>
                <Modal show={this.props.show} onHide={() => this.close()}  bsSize="small" >
                    <Modal.Header closeButton>
                        <Modal.Title>Settings</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <FieldGroup
                                id="title"
                                type="text"
                                label="Title"
                                onChange={this.onFormChange}
                                value={this.state.title}
                            />
                            <FieldGroup
                                id="description"
                                componentClass="textarea"
                                label="Description"
                                onChange={this.onFormChange}
                                value={this.state.description}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={()=>{this.delete()}}className="SettingsModal-Delete" bsStyle="danger"><Glyphicon glyph="trash"/></Button>
                            <Button onClick={()=>{this.close()}}>Cancel</Button>
                            <Button bsStyle="success" onClick={()=>{this.update()}}><Glyphicon glyph="ok"  /></Button>
                        </Modal.Footer>
                </Modal>
            </div>
           
        )
    }
}

