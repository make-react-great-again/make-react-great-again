# make react/antd great ~~again~~

## Install

```bash
npm install --save make-react-great-again
```

## 本项目试图对 为`react`的`class`提供一个装饰器，进行一些页面初始化时异步请求的优化

1. 使用 `HOC` 对 `react` 的 `class组件`进行装饰，提供一个@page 的装饰器
2. 提供一个 preload 方法，可将初始化时页面所需的数据请求放入，同时提供一个 loading 状态
3. 把组件初始时的请求从生命周期中转移到`preload`中，结果直接挂载到 `props` 上

## 使用示例

```jsx
import { page } from "make-react-great-again";
// 可以将异步数据请求的逻辑放在class外，不用写生命周期
const getListData = props => axios.get("/mock/list.json").then(data => data);
const getListDetailData = props => axios.get("/mock/listDetail.json").then(data => data);

// 装饰器语法需要项目环境支持
@page({
  preload: props => {
    listData: getListData(props),
    listDetailData: getListDetailData(props),
  }
})
class Example extends React.Component {
  render() {
    // 装饰后，异步请求的数据会挂载到props上
    const { listData, listDetailData } = props;
    console.log(listData, listDetailData);
    return <div>...</div>;
  }
}
```

`注意`

1. 如果`preload`中指定的 key 与父组件传过来的`props`中字段重复，则父组件传递的`props`字段`会被覆盖！！！`
2. `preload`主要为了页面初始化时发起异步请求，请不要将常量字段写在此处，虽然可以正常挂载到`props`上，但是没必要
3. 多个请求时，如果其中一个请求出错或者`rejected`，会返回 undefined，但不会影响其他几个请求。

## License

MIT © [yangdepp](https://github.com/yangdepp) © [yx675258207](https://github.com/yx675258207)
