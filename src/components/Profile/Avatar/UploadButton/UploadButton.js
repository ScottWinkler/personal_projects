import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {Button,Glyphicon} from 'react-bootstrap';
import UploadModal from './UploadModal/UploadModal.js';
import './UploadButton.css';
export default class AvatarImage extends Component {
constructor(props){
super(props);
this.state={showModal:false}
}
    render() {

        return (

                <div className="UploadButton">
                    <Button className="UploadButton-Btn"   onClick={()=>{this.setState({showModal:true})}}><Glyphicon glyph="pencil"/></Button>
                    <UploadModal src={this.props.src} username={this.props.username} show={this.state.showModal} update={this.props.update} close={()=>{this.setState({showModal:false})}}/>
                </div>
        )}}