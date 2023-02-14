import React from "react";

const Home = React.lazy(() => import('../pages/Home'))
const About = React.lazy(() => import('../pages/About'))
const Message = React.lazy(() => import('../pages/Message'))
const News = React.lazy(() => import('../pages/News'))
const Detail = React.lazy(() => import('../pages/Detail'))

const userRouter = [
  {
    path: '/',
    component: Home,
    exact: true, //精确匹配开启
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/news',
        component: News
      },
      {
        path: '/home/message',
        component: Message,
        children: [
          {
            path: '/home/message/detail/:id',
            component: Detail
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    component: About
  }
]

export default userRouter