import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import {MenuItem,Dropdown} from 'react-bootstrap';
import './Menu.css';
import CustomToggle from './CustomToggle/CustomToggle.js';
export default class Menu extends Component {
    render() {
        return (
            <li className="Menu">
                <Dropdown id="menu">
                    <CustomToggle bsRole="toggle"/>
                    <Dropdown.Menu>
                        {this.props.username ?<MenuItem eventKey="1" className="Menu-Item" onClick={() => this.props.push('/profile')}>{this.props.username}'s Account</MenuItem> : null}
                        {this.props.username ?<MenuItem eventKey="2" className="Menu-Item"onClick={() => this.props.push('/blog')}>{this.props.username}'s Blog</MenuItem> : null}
                        {this.props.username ?<MenuItem eventKey="3" className="Menu-Item"onClick={() => this.props.push('/gallery')}>{this.props.username}'s Gallery</MenuItem> : null}
                        {this.props.username ?<MenuItem eventKey="4" className="Menu-Item">{this.props.username}'s Friends</MenuItem> : null}
                        {this.props.username ?<MenuItem eventKey="5" className="Menu-Item">Find Friends</MenuItem> : null}
                        {this.props.username ?<MenuItem divider/> : null}
                        
                       <MenuItem eventKey="6" className="Menu-Item">Browse Blogs</MenuItem>
                        <MenuItem eventKey="7" className="Menu-Item">Browse Galleries</MenuItem>
                    </Dropdown.Menu>
                </Dropdown>
            </li>
        )
    }
}
