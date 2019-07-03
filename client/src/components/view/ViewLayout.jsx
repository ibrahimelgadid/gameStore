import React, { Component } from 'react';

// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './Navbar';


class ViewLayout extends Component {
  render() {
    return (
      <div >
        
          <Navbar />
        <div className="container">
            {this.props.children}
        </div>
        
      </div>
    );
  }
}
export default ViewLayout;