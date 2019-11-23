import React, { Component } from "react";

const style = target => {
  console.log(target)
  return Component => {
    return class EnhancedComponent extends React.Component {
      componentDidMount() {
        if (target && target.use) {
          target.use();
        }
      }
      componentWillUnMount() {
        if (target && target.unuse) {
          target.unuse();
        }
      }
      render() {
        return <Component {...this.props} />;
      }
    };
  };
};

export default style;
