import React from 'react'
import Calendar from '../pages/CalendarPage/Calendar'

import ChatPage from '../pages/ChatPage/ChatPage'
import Login from '../pages/Login/Login'
import { PrivateRoute } from './PrivateRoutes'
import { PublicRoute } from './PublicRoutes'

const routes = [
  { path: '/chat/:userId', component: ChatPage, private: false },
  { path: '/login', component: Login, private: false },
  { path: '/calendar', component: Calendar, private: false },
  { path: '*', component: Login, private: false }
]

const buildRoutes = () => {
  return routes.map((route, index) => {
    return route.private ? (
      <PrivateRoute key={`route-${index}`} {...route} />
    ) : (
      <PublicRoute key={`route-${index}`} {...route} />
    )
  })
}

export default buildRoutes