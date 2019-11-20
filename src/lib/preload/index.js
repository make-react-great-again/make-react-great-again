import React, { Component } from "react";
import transitionComponent from "../loading/index.jsx";
import Util from "../util";

const __defaultMinLoadTime__ = 0;

/**
 * target 是一个函数 | 对象
 * return 一个对象，这个对象的每个value是promise或者
 */
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
      componentDidMount() {
        if (target) {
          const startTime = Date.now();
          minLoadTime =
            typeof minLoadTime !== "undefined" && minLoadTime !== null
              ? minLoadTime
              : 0;
          new Promise(resolve => {
            if (Util.isObject(target)) {
              resolve({
                ...target
              });
            } else {
              // Promise.resolve().then(() => {
                resolve({
                  // 把组件接收的props当做preload的参数
                  ...target(this.props)
                });
              // });
            }
          }).then(target => {
            console.log(target);
          });
        }
      }
      componentWillUnmount() {}
      render() {
        return <Component />;
      }
    };
  };
};

export default preload;
