import React, { Component } from "react";

import PreloadExample from "./components/preload";

export default class App extends Component {
  render() {
    return (
      <div>
        <PreloadExample normalProps={2} />
      </div>
    );
  }
}
