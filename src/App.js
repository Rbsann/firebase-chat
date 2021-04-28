import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import ChatPage from './pages/ChatPage/ChatPage'

import './App.css'

const App = () => {
  return (
    <>
      <div className='app'>
        <div className='app__body'>
          <Router>
            <Switch>
              <Route path='/:userId'>
                <ChatPage />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </>
  )
}

export default App
