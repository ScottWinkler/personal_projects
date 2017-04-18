import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import GalleryListItem from './GalleryListItem/GalleryListItem.js';
import './Gallery.css';
import GalleryUploadButton from './GalleryUploadButton/GalleryUploadButton.js';
import {Grid,Col,Row} from 'react-bootstrap';
export default class Gallery extends Component {
  render() {
    const listItems=this.props.galleryData ? this.props.galleryData.map((data,index)=><GalleryListItem data={data} key={index} update={this.props.update} delete={this.props.delete} id_active_user={this.props.id_active_user}/>) : null;
    return (
      <div className="Gallery">
        <Grid>
          <Row>
            <Col md={2} mdOffset={10} className="Gallery-Col">
              <GalleryUploadButton upload={this.props.upload} id_active_user={this.props.id_active_user}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul className="GalleryList">
                {listItems}
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
