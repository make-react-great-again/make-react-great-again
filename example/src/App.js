import React, { Component } from "react";

import PreloadExample from "./components/preload";
import DemoExample from "./components/demo";
import { Loading } from "make-react-great-again";

export default class App extends Component {
  render() {
    return (
      <div>
        <PreloadExample normalProps={2} />
        <DemoExample />
        <Loading></Loading>
      </div>
    );
  }
}
