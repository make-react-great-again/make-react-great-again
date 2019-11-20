import preload from "../preload";

export default (options = {}) => {
  return Component => {
    if (options.preload) {
      Component = preload(
        options.preload,
        options.preloadLoadComponent,
        options.preloadMinLoadTime
      )(Component);
    }
    return Component;
  };
};
