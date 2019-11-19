import React, { Component } from "react";
import { Demo } from "make-react-great-again";
import Loading from "./loading.svg";

class index extends Component {
  render() {
    return (
      <div>
        <Demo />
        <svg>
          <use xlinkHref={`#${Loading}`} />
        </svg>
      </div>
    );
  }
}

export default index;
