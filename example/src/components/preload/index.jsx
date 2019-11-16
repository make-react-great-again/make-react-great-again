import { preload } from 'make-react-great-again';
import React, { Component } from 'react';

const getNumber = (props) => {
  const { normalProps } = props;
  return normalProps + 1000;
};

// @preload({
//   title: 'test title',
//   form: true,
//   style: require('./style.scss'),
//   preload: (props) => ({
//     resultData: getNumber(props),
//   }),
// })
class Demo extends Component {
  constructor(props) {
    super(props);
  }

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
