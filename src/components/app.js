import React from 'react';
import SideBar from './sidebar/sidebar';

export default class App extends React.Component{
  render(){
    return (
      <div class="row">
          <SideBar />
          {this.props.children}
      </div>


    );
  }

}
