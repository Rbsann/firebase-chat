import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, BrowserRouter as Router, Switch, useParams } from 'react-router-dom'
import { fetchUsers, syncMessages } from './redux/actions'
import { isEmpty } from 'lodash'

import Sidebar from './components/Sidebar/Sidebar'
import Chat from './components/Chat/Chat'

import './App.css'

const App = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const messages = useSelector(state => state.userMessage)
  const allMessages = useSelector(state => state.messages)
  const dbUserHash = useSelector(state => state.dbUserHash)

  const [correctMessages, setCorrectMessages] = useState([])
  console.log(messages)
  console.log(correctMessages)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  useEffect(() => {
    setCorrectMessages(messages)
  }, [messages])

  useEffect(() => {
    console.log(allMessages, 'lalalal')
    if (dbUserHash) setCorrectMessages(allMessages.filter(msg => msg.id === dbUserHash).pop())
  }, [allMessages])

  console.log(correctMessages, 'teste')

  return (
    <>
      {!isEmpty(users) && (
        <div className='app'>
          <div className='app__body'>
            <Router>
              <Route path='/:userId' render={((props) =>
                <>
                  <Sidebar {...props} users={users} />
                  {!isEmpty(messages) && !isEmpty(correctMessages) && <Chat messages={correctMessages} dbUserHash={dbUserHash} />}
                </>)}
              />
            </Router>
          </div>
        </div>
      )}
    </>
  )
}

export default App
