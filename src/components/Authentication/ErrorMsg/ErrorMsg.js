import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';
import './ErrorMsg.css';
export default class ErrorMsg extends Component {
    render() {
        return (
            <Alert bsStyle="warning" className="ErrorMsg">
            <strong>ERROR:</strong> {this.props.message}
            </Alert>
        )
    }
}