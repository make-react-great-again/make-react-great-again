import preload from "../preload";
import title from "../title";
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
    if (options.title) {
      Component = title(options.title)(Component);
    }
    if (options.style) {
      Component = style(options.style)(Component);
    }
    return Component;
  };
};
