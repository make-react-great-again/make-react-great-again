const Util = {
  isObject(obj) {
    return typeof obj === "object" && obj !== null;
  },
  isFunction(obj) {
    return obj && typeof obj === "function";
  }
};

export default Util;
