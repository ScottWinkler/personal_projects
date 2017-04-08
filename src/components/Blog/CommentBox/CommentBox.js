import React, {Component} from 'react';
import CommentHeader from './CommentHeader/CommentHeader.js';
import CommentFooter from './CommentFooter/CommentFooter.js';
import CommentAvatar from './CommentAvatar/CommentAvatar.js';
import './CommentBox.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Media} from 'react-bootstrap';

export default class CommentBox extends Component {
    render() {
        const children = this.props.blogData.commentData
            .filter((data) => data.id_parent === this.props.data.id)
            .map((data, index) => <li key={data.id}><CommentBox data={data}  blogData={this.props.blogData} id_active_user={this.props.id_active_user} post={this.props.post} like={this.props.like}/></li>);
        const likes = this.props.blogData.likesData.filter((data)=>data.id_comment===this.props.data.id).length;
        const liked=this.props.blogData.likesData.some((data)=>{return data.id_comment===this.props.data.id && data.id_liker===this.props.id_active_user})
        const user = this.props.blogData.bloggersData.find((data) => data.id === this.props.data.id_creator);

        return (
  
            <Media className="CommentBox">
                <Media.Left >
                    <CommentAvatar src={user.src} />
                </Media.Left>
                <Media.Body  >
                    <div > 
                    <Media.Heading >
                        <CommentHeader account_permissions={user.account_permissions} username={user.username} datetime_created={this.props.data.datetime_created} />
                    </Media.Heading>
                    <p className="CommentBox-Message">{this.props.data.message}</p>
                    <CommentFooter 
                        liked={liked}
                        likes={likes}
                        like={this.props.like}
                        post={this.props.post}
                        id_owner={this.props.data.id_owner}
                        id_active_user={this.props.id_active_user}
                        id_comment={this.props.data.id}
                    />
                    </div>
                    <ul className="CommentBox-Children">
                        {children}
                    </ul>
                </Media.Body>
            </Media>
        )
    }
}