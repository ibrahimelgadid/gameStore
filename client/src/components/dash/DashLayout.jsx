import React, { Component } from 'react';
import DashNav from './DashNav';

class DashLayout extends Component {
  render() {
    return (
      <div>
        <DashNav />
        <div className="container">
            {this.props.children}
        </div>
      </div>
    );
  }
}
export default DashLayout;