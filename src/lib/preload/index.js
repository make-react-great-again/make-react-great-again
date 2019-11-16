import React, { Component } from 'react';

export function preload(params = {}) {
  const { form, preload = () => ({}), connect = [], title } = params;
  return (WrappedComponent) => {
    return class Enhanced extends Component {
      constructor(props) {
        super(props);
        this.state = {};
        title && (document.title = title);
      }
      render() {
        const data = preload(this.props);
        let newProps = {
          ...this.props,
          ...data,
        };
        return <WrappedComponent {...newProps} />;
      }
    };
  };
}
