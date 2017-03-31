import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import './ProfileItem.css';
import ProfileItemGlyph from './ProfileItemGlyph/ProfileItemGlyph.js';
import ProfileItemKey from './ProfileItemKey/ProfileItemKey.js';
import ProfileItemValue from './ProfileItemValue/ProfileItemValue.js';

export default class ProfileItem extends Component{

    render(){
        return(

            <ul className="ProfileItem">
                <ProfileItemGlyph
                glyph={this.props.glyph}
                type={this.props.type}
                update={this.props.update}
                error={this.props.error}
                isValidating={this.props.isValidating}
                sendError={this.props.sendError}
                username={this.props.username}
                />
                <ProfileItemKey title={this.props.title}/>
                <ProfileItemValue value={this.props.value}/>             
           </ul>
        )
    }
}
