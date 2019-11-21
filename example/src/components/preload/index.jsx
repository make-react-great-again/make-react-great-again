import { page } from "make-react-great-again";
import React, { Component } from "react";
import axios from "axios";
import LoadingComponent from "../loading/index.jsx";

const getList = props => axios.get("/mock/list.json").then(data => data.data);
const getOrder = axios.get("/mock/order.json").then(data => undefined);
const test = async function test(props) {
  const result1 = await axios.get("/mock/list.json");
  const result = await axios.get(
    `/mock/order.json?name=${result1.data[0].name}`
  );
  return result.data;
};

@page({
  preload: props => ({
    listData: getList(props),
    orderData: getOrder,
    testAsyncFunction: test(props),
    testNormalFunction: props => {
      return props.test + 1;
    },
    testNoFunction: props.test + 2,
    testFalsy: undefined,
    testNull: null,
    test: 3
  }),
  // preload: {
  //   on: test()
  // },
  preloadMinLoadTime: 1000,
  preloadLoadComponent: <LoadingComponent />
})
class Demo extends Component {
  render() {
    console.log("props", this.props);
    return <div>hello world</div>;
  }
}
export default Demo;
