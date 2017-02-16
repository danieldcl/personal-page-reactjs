import React from 'react';
import SideBar from './sidebar/sidebar';

export default class App extends React.Component{
  render(){
    return (
      <div>
        <div class="row">
          <div id="sidebar" class="col-xs-12 col-md-3">
            <SideBar />
          </div>
          <div id="page-container" class="col-xs-12 col-md-9">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

}
