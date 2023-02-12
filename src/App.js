import React from "react";
import { Route, Link, Switch, Redirect, withRouter } from 'react-router-dom'
import Home from './components/Home'
import Son from './components/Son'

function App(props) {
  return (
    <div>
      App<br />
      <button onClick={() => {
        props.history.push('/son')
      }}>编程式导航按钮</button>
      <hr />
      <Link to={'/home'}>home页面</Link><br />
      <Link to={'/son'}>son页面</Link>
      <hr />

      {/* 加上exact 就是精确匹配 按照路由的 /xxx这样的分段来进行匹配的 */}
      {/* <Route path={'/'} component={Home} exact></Route>
      <Route path={'/home'} component={Home}></Route>
      <Route path={'/son'} component={Son}></Route> */}

      {/* 当路由被Switch包裹时 只要有一次成功 就会终止继续向下匹配 */}
      {/* 所以当路由为localhost：3000 时 匹配到home时只会显示home 因为当与/匹配时 就不会再向下匹配了  */}
      <Switch>
        <Route path={'/'} component={Home} exact></Route>
        <Route path={'/home'} component={Home}></Route>
        <Route path={'/son'} component={Son}></Route>
      </Switch>
      {/* Redirect组件 */}
      <Route path={'/home'} component={Home}></Route>
      <Route path={'/son'} component={Son}></Route>
      {/* 如果当Redirect组件只写to属性 那么 遍历路由到这里时会立马执行 重定向到home页面 */}
      {/* 如果要进行判断时 就要加上from属性 当路由为/xxx时跳转到/home页面 */}
      <Redirect from={'/xxx'} to={'/home'}></Redirect>
      <hr />
    </div>
  )
}


const withApp = withRouter(App)

export default withApp
