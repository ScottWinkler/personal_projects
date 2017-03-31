import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';
import './CustomToggle.css';
export default class CustomToggle extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onClick(e);
  }

  render() {
    return (
      <Glyphicon glyph="menu-hamburger" onClick={this.handleClick} className="CustomToggle"/>
    );
  }
}
