import React from "react";
import Util from "../util";
import DocumentTitle from "react-document-title";

const title = target => {
  return Component => {
    return class EnhancedComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          title: ""
        };
      }
      componentDidMount() {
        if (target) {
          if (target instanceof Promise) {
            target
              .then(title =>
                this.setState({
                  title
                })
              )
              .catch(() => {
                this.setState({
                  title: "页面加载中..."
                });
              });
          } else if (Util.isFunction(target)) {
            this.setState({
              title: target()
            });
          } else {
            this.setState({
              title: target
            });
          }
        }
      }
      render() {
        const { title } = this.state;
        return (
          <DocumentTitle title={title}>
            <Component {...this.props} />
          </DocumentTitle>
        );
      }
    };
  };
};
export default title;
