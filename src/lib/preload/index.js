import React, { Component } from "react";
import TransitionComponent from "../loading/index.jsx";
import Util from "../util";

/**
 * target 是一个函数 | 对象
 * return 一个对象，这个对象的每个value是promise
 */
const preload = (target, loadingComponent, minLoadTime) => {
  return Component => {
    return class EnhancedComponent extends React.Component {
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
              // todo 是都需要再套一层Promise.resolve
              // Promise.resolve().then(() => {
              resolve({
                // 把组件接收的props当做preload的参数
                ...target(this.props)
              });
            }
          }).then(target => {
            const props = this.props;
            const __indexName__ = {};
            let i = 0,
              temp = null;
            Promise.all(
              Object.keys(target).map(key => {
                __indexName__[i] = key;
                if (props[key]) {
                  console.warn(`预加载数据${key}与props冲突，会覆盖props数据`);
                }
                temp = target[key];
                i++;
                // todo 判断Promise的方法是否完整
                if (temp instanceof Promise) {
                  return temp;
                } else {
                  temp = Util.isFunction(temp) ? temp(props) : temp;
                  // todo 如果value是一个falsy值，是否需要Promise.reject(temp)
                  return temp ? Promise.resolve(temp) : temp;
                }
              })
            )
              .then(datas => {
                const data = {};
                datas.forEach((item, index) => {
                  data[__indexName__[index]] = item;
                });
                const endTime = Date.now();
                const deltaTime = endTime - startTime;
                if (deltaTime >= minLoadTime) {
                  this.setState({
                    data,
                    isReady: true
                  });
                } else {
                  this.timeId = setTimeout(
                    () =>
                      this.setState({
                        data,
                        isReady: true
                      }),
                    minLoadTime - deltaTime
                  );
                }
              })
              .catch(error => {
                console.error(error);
                this.setState({
                  isReady: true
                });
              });
          });
        } else {
          this.setState({
            isReady: true
          });
        }
      }
      componentWillUnmount() {}
      render() {
        return this.state.isReady ? (
          <Component {...this.props} {...this.state.data} />
        ) : loadingComponent ? (
          loadingComponent
        ) : (
          <TransitionComponent />
        );
      }
    };
  };
};

export default preload;
