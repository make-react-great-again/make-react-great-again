import React, { Component } from "react";

import PreloadExample from "./components/preload";

export default class App extends Component {
  render() {
    return (
      <div>
        <PreloadExample test={2} />
      </div>
    );
  }
}
