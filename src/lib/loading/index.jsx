import React, { Component } from "react";
import './style.scss';

class Loading extends Component {
  render() {
    return (
      <div className="loading-wrapper">
        <div className="loading-text_wrapper">
          <div className="loading-text">Loading...</div>
        </div>
      </div>
    );
  }
}

export default Loading;
