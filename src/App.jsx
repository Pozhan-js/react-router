import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const Home = React.lazy(() => import('./components/Home.jsx'))
const About = React.lazy(() => import('./components/About.jsx'))

export default function App() {
  return (
    <div>
      <Suspense fallback={<h1 style={{ color: 'red' }}>正在加载。。。。</h1>}>
        <Routes>
          <Route path={'/'} element={<Home></Home>}></Route>
          <Route path={'/home'} element={<Home></Home>}></Route>
          <Route path={'/about'} element={<About></About>}></Route>
        </Routes>
      </Suspense>
    </div>
  )
}
