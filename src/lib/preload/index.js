import React, { Component } from "react";

const preload = (target, loadingComponent, minLoadTime) => {
  return Component => {
    return class EnhancedComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          isReady: false,
          data: {}
        };
      }
      componentWillMount() {

      }
      componentWillUnmount() {

      }
      render() {
        return <Component />;
      }
    };
  };
};

export default preload;
