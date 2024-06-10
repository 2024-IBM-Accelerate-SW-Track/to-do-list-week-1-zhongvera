import React, { Component } from 'react';
import "./About.css";
import pfp from "../assets/pfp.JPG";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="split left">
        <div className="centered">
        <img 
        className="profile_image"
        // Image goes here
        src = {pfp}
        alt="Profile Pic"
        ></img>
        </div>
        </div>
        <div className="split right">
        <div className="centered">
        <div className="name_title">Vera Zhong</div>
        <div className="brief_description">
        <p> Interests: working out, ice skating, travel, food</p>
        </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
}