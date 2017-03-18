import React from 'react';
import { Link } from 'react-router';


export default class SideBar extends React.Component{
  render(){
    return(
    <div class="sidebar-content">
        <div class="img-wrapper">
          <img src="./assets/imgs/profilepicture.JPG" />
        </div>
        <h1>Dingchao Liao (Dc)</h1>
        <p>
          Web Developer. Python, ReactJS, HTML, Javascript.
        </p>

        <div>
          <button type="button" class="navbar-toggle pull-left hidden-md hidden-lg" data-toggle="collapse" data-target=".navbar-ex1-collapse"> <span class="sr-only ">Toggle navigation</span> <i class="fa fa-bars fa-2x" aria-hidden="true"></i></button>

          <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav navbar-left navr">
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
    </div>
  )}
}
