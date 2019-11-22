import preload from "../preload";
import title from "../title";

export default (options = {}) => {
  return Component => {
    if (options.preload) {
      Component = preload(
        options.preload,
        options.preloadLoadComponent,
        options.preloadMinLoadTime
      )(Component);
    }
    if (options.title) {
      Component = title(options.title)(Component);
    }
    return Component;
  };
};
