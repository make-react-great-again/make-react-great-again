import React, { Component } from "react";
import axios from "axios";
import { page } from "make-react-great-again";

const getTitle = () =>
  axios.get("/mock/title.json").then(data => data.data.name);

@page({
  // title: "哈哈哈"
  title: getTitle()
  // title: () => "aaa"
  // title: undefined
})
class Title extends Component {
  render() {
    return <div>hello world</div>;
  }
}

export default Title;
