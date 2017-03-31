import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';
import './ProfileItemGlyph.css';
import UpdateEmailModal from './UpdateEmailModal/UpdateEmailModal.js';
export default class ProfileItemGlyph extends Component{
constructor(props){
super(props);
this.state={showModal:false}}
    render(){
        return(

                <li className="ProfileItemGlyph" ><button className="ProfileItemGlyph-Button"  onClick={()=>{this.setState({showModal:true})}}><Glyphicon className="ProfileItemGlyph-Glyph" glyph={this.props.glyph}/> </button>
               {this.props.type==="email" ?
                    <UpdateEmailModal
                    show={this.state.showModal}
                    update={this.props.update}
                    close={()=>{this.setState({showModal:false})}}
                    error={this.props.error}
                    isValidating={this.props.isValidating}
                    sendError={this.props.sendError}
                    username={this.props.username}
                    />
                    : null}


                </li>

        )
    }
}