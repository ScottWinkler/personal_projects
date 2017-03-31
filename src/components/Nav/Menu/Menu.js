import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {DropdownButton,MenuItem,Glyphicon,Dropdown} from 'react-bootstrap';
import './Menu.css';
import CustomToggle from './CustomToggle/CustomToggle.js';
export default class Menu extends Component {
    render() {
        return (
            <li className="Menu">
                <Dropdown id="menu">
                    <CustomToggle bsRole="toggle"/>
                    <Dropdown.Menu>
                        <MenuItem eventKey="1" className="Menu-Item" onClick={() => this.props.push('/profile')}>Account</MenuItem>
                        <MenuItem eventKey="2" className="Menu-Item" >My Kitty Blog</MenuItem>
                        <MenuItem eventKey="3" className="Menu-Item">Friends</MenuItem>
                        <MenuItem divider/>
                       <MenuItem eventKey="4" className="Menu-Item">Find Blogs</MenuItem>
                        <MenuItem eventKey="4" className="Menu-Item">Find Friends</MenuItem>
                    </Dropdown.Menu>
                </Dropdown>
            </li>
        )
    }
}
