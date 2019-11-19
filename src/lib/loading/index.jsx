import React, { Component } from "react";
import LoadingIcon from "../icons/loading.svg";
console.log(LoadingIcon)

class Loading extends Component {
  render() {
    return (
      <div>
        <svg
          style={{
            width: "1.2em",
            height: "1.2em",
            display: "inline-block",
            fill: "currentColor"
          }}
        >
          <use xlinkHref={`#${LoadingIcon}`} />
        </svg>
      </div>
    );
  }
}

export default Loading;
