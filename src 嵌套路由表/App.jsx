import React, { Component, Suspense } from 'react'
import { Route, Link } from 'react-router-dom'
import router from './router'

// const Home = React.lazy(() => import('./pages/Home'))
// const About = React.lazy(() => import('./pages/About'))
// import Home from './pages/Home'
// import About from './pages/About'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='page-header'>
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>
              <Link className='list-group-item' to={'/about'}>
                About
              </Link>
              <Link className='list-group-item' to={'/home'}>
                Home
              </Link>
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* <Home ></Home>
                <About></About> */}
                <Suspense fallback={<h1 style={{ color: 'red' }} >...正在加载</h1>}>
                  {/* <Route path={'/home'} component={Home}></Route>
                  <Route path={'/about'} component={About}></Route> */}
                  {
                    router.map((item) => {
                      return <Route
                        key={item.path}
                        path={item.path}
                        exact={item.exact}
                        render={(props) => {
                          return <item.component {...props} subRouter={item.children}></item.component>
                          // console.log('props', item);
                        }}></Route>
                    })
                  }
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
