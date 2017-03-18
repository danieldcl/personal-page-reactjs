import React from 'react';
import SideBar from './sidebar/sidebar';

export default class App extends React.Component{
  render(){
    return (
      <div class="container">
        <div class="row">

          <div class="col-md-3">
            <SideBar />
          </div>

          <div class="col-md-9">
            {this.props.children}
          </div>
        </div>
      </div>


    );
  }

}
