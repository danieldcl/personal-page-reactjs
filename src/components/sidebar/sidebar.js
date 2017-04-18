import React from 'react';
import { Link } from 'react-router';


export default class SideBar extends React.Component{
  render(){
    return(
    <div id="sidebar" class="sidebar col-xs-12 col-sm-3 col-md-4 pull-left">
      <div class="img-wrapper">
        <img class="profilepicture" src="/assets/img/profilepicture.JPG" />
      </div>

        <h2>Hi, I'm Dc</h2>
        <p>
          <i>Software developer</i> at <a href="http://fripapp.com" target="_blank">Fripapp</a>.
        </p>
        <ul class="list-group">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/work">Work and Experience</Link>
          </li>
        </ul>

        <a href="mailto:dcliao92@gmail.com" class="email-link">
          <div class="email-wrapper">
            <i class="fa fa-envelope" aria-hidden="true"/>Send me an email!
          </div>
        </a>
          <div class="social-links">
              <a href="https://github.com/danieldcl" target="_blank"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
              <a href="https://www.linkedin.com/in/dingchao-liao-412217107/" target="_blank"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
          </div>
    </div>
  )}
}
