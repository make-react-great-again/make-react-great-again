import { page } from "make-react-great-again";
import React, { Component } from "react";
import axios from "axios";

const getList = (props) => axios.get("/mock/list.json").then(data => data);
const getOrder = axios.get("/mock/order.json").then(data => data);
const test = async function test(props) {
  const result = await axios.get("/mock/list.json");
  return result;
};

@page({
  preload: props => ({
    listData: getList(props),
    orderData: getOrder,
    test: test(props)
  })
  // preload: {
  //   on: test()
  // }
})
class Demo extends Component {
  render() {
    const { resultData } = this.props;
    return (
      <div>
        hello world
        <div className="abc">{resultData}</div>
      </div>
    );
  }
}
export default Demo;
