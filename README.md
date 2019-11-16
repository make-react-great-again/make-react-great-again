# make react/antd great ~~again~~

>

[![NPM](https://img.shields.io/npm/v/make-react-great-again.svg)](https://www.npmjs.com/package/make-react-great-again) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save make-react-great-again
```

## 本项目试图对 react 和 antd 进行再封装，期望能达到以下目标

1. 使用 `HOC` 对 `react` 的 `class组件`进行装饰
2. 装饰器分为两个：`page` & `component`, `page` 装饰器可以设置页面`title`,其他功能如下
3. 引入`style`样式
4. 设置`form: true`后，自动将组件用 `antd from` 包裹,可在 `props` 中拿到 `form` 的方法, 也可以在 `HOC` 中封装更多方法

   ```jsx
   Form.create({ name: 'wrapped_form_component' })(WrappedComponent);
   ```

5. 可以把组件初始时的请求从生命周期中转移到`preload`中，结果直接挂载到 `props` 上
6. 如果用到`redux`，则设置`connect`,将 `mapStateToProps` `mapDispatchToProps` 挂载到 `props` 上
7. 更多基于 `antd` 的 `UI` 组件封装...

## 使用示例

```jsx
@hoc({
  form: true,
  style: require('./style.scss'),
  // 页面初始化时预加载一些请求,结果挂载到props上
  preload: (props) => ({
    preloadData: getNumber(props),
  }),
  connect: {},
})
class Demo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { preloadData } = this.props;
    return (
      <div>
        <input type="text" className="text" />
        <div>{preloadData}</div>
      </div>
    );
  }
}
```

## License

MIT © [yangdepp](https://github.com/yangdepp) © [yx675258207](https://github.com/yx675258207)
