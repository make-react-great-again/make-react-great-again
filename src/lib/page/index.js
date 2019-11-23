import preload from "../preload";
import style from "../style";

export default (options = {}) => {
  return Component => {
    if (options.preload) {
      Component = preload(
        options.preload,
        options.preloadLoadComponent,
        options.preloadMinLoadTime
      )(Component);
    }
    if (options.style) {
      Component = style(options.style)(Component);
    }
    return Component;
  };
};
