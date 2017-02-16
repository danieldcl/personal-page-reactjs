import React from 'react';
import { Link } from 'react-router';


export default class SideBar extends React.Component{
  render(){
    return(
    <div>
      <img src="./assets/imgs/profilepicture.JPG" />
      <h1>Dingchao Liao (Dc)</h1>
      <p>
        Web Developer. Python, ReactJS, HTML, Javascript.
      </p>

      <div>
        <ul class="list-inline">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  )}
}
