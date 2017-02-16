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
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <a href="https://github.com/danieldcl" target="_blank">Github</a>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )}
}
