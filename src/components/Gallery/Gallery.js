import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import GalleryListItem from './GalleryListItem/GalleryListItem.js';
import './Gallery.css';
import GalleryUploadButton from './GalleryUploadButton/GalleryUploadButton.js';
import {Grid,Col,Row} from 'react-bootstrap';
export default class Gallery extends Component {
  render() {
    const srcs=["home_1","B","C","D","A"];
    const listItems=srcs.map((src,index)=><GalleryListItem src={src} key={index}/>)
    return (
      <div className="Gallery">
        <Grid>
          <Row>
            <Col md={2} mdOffset={10}>
              <GalleryUploadButton />
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
