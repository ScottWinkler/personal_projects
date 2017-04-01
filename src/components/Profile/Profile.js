import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import './Profile.css';
import Avatar from './Avatar/Avatar.js';
import ProfileItem from './ProfileItem/ProfileItem.js';
import ProfileHeader from './ProfileHeader/ProfileHeader.js';

export default class Profile extends Component{


    render(){
        return(
                <div>
                    <Avatar
                    username={this.props.username}
                    src={this.props.src}
                    update={this.props.update}/>
                    
                    <ProfileHeader title={this.props.username} signupDate={this.props.signupDate}/>
                    <ProfileItem
                    title="Username"
                    glyph="user"
                    value={this.props.username} 
                    type="username" />
                    
                    <ProfileItem
                    title="E-mail"
                    glyph="envelope"
                    value={this.props.email}
                    type="email"
                    update={this.props.update}
                    error={this.props.error}
                    isValidating={this.props.isValidating}
                    sendError={this.props.sendError}
                    username={this.props.username}
                    />
                    
                    <ProfileItem title="Password"
                    glyph="lock"
                    value="****"
                    type="password"
                    update={this.props.update}
                    error={this.props.error}
                    isValidating={this.props.isValidating}
                    sendError={this.props.sendError}
                    username={this.props.username}
                    />
                </div>
        )
    }
}