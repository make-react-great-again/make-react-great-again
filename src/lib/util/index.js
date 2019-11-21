const Util = {
  isObject(obj) {
    return typeof obj === "object";
  },
  isFunction(obj) {
    return obj && typeof obj === "function";
  }
};

export default Util;
