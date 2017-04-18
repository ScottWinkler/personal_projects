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
                        {this.props.activeUser ?<MenuItem eventKey="1" className="Menu-Item" onClick={() => this.props.push('/profile')}>{this.props.activeUser.username}'s Account</MenuItem> : null}
                        {this.props.activeUser ?<MenuItem eventKey="2" className="Menu-Item"onClick={() => this.props.push('/blog')}>{this.props.activeUser.username}'s Blog</MenuItem> : null}
                        {this.props.activeUser ?<MenuItem eventKey="3" className="Menu-Item"onClick={() => this.props.links.toGallery({id_user:this.props.activeUser.id})}>{this.props.activeUser.username}'s Gallery</MenuItem> : null}
                        {this.props.activeUser ?<MenuItem eventKey="4" className="Menu-Item">{this.props.activeUser.username}'s Friends</MenuItem> : null}
                        {this.props.activeUser ?<MenuItem eventKey="5" className="Menu-Item">Find Friends</MenuItem> : null}
                        {this.props.activeUser ?<MenuItem divider/> : null}
                        
                       <MenuItem eventKey="6" className="Menu-Item">Browse Blogs</MenuItem>
                        <MenuItem eventKey="7" className="Menu-Item">Browse Galleries</MenuItem>
                    </Dropdown.Menu>
                </Dropdown>
            </li>
        )
    }
}
