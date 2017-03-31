import './App.css';
import React, {Component} from 'react';
import {Fragment} from 'redux-little-router';
import {getURL,postURL} from '../../utilities/xmlhttp.js';
import Nav from '../../containers/Nav.js';
import Login from '../../containers/Login.js';
import Signup from '../../containers/Signup.js';
import Profile from '../../containers/Profile.js';


export default class App extends Component {
  render() {
    return (
      <Fragment forRoute='/'>
      <div>
        <Nav />
        <Fragment forRoute='/home'><Home /></Fragment>
        <Fragment forRoute='/login'><Login /></Fragment>
        <Fragment forRoute='/signup'><Signup /></Fragment>
        <Fragment forRoute='/profile'><Profile /></Fragment>
  
        </div>
      </Fragment>

    )
  }}


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

