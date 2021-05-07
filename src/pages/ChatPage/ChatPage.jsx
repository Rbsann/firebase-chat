import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'

import { fetchUsers, syncMessages, sendMessage } from '../../redux/actions'
import { isEmpty } from 'lodash'
import { DateTime } from 'luxon'


import Sidebar from '../../components/Sidebar/Sidebar'
import ChatBox from '../../components/ChatBox/ChatBox'
import './ChatPage.css'

const ChatPage = () => {
  const [message, setMessage] = useState('')
  const [messagesToSend, setMessagesToSend] = useState([])
  const [dbHash, setDbhash] = useState('')

  const { userId } = useParams()
  const users = useSelector(state => state.users)
  const userData = useSelector(state => state.userData)
  const userMessages = useSelector(state => state.messages)
  const dispatch = useDispatch()

  const { email } = userData

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const handleUserClick = (patientId) => {
    if (userId) {
      dispatch(syncMessages(userId, patientId))
      setDbhash(`${userId}-${patientId}`)
      setMessagesToSend([])
    }
  }

  const handleInputChange = (message) => {
    setMessage(message)
  }

  const handleSubmitMessage = (e) => {
    e.preventDefault()
    setMessagesToSend({message: message, createdAt: DateTime.local().setZone('utc').toString(), from: userId  })
    setMessage('')
  }

  useEffect(() => {
    if (dbHash && !isEmpty(messagesToSend)) dispatch(sendMessage(messagesToSend, dbHash))
  }, [messagesToSend, dispatch])

  console.log(encodeURI(email))

  useEffect(() => {
    console.log(userMessages)
  }, [userMessages])

  return (
    <div className='chat-full'>

      <Sidebar handleClick={handleUserClick} users={users} />
      {(!isEmpty(userMessages)) && (
        <ChatBox
          userId={userId}
          messages={userMessages}
          message={message}
          handleInputChange={handleInputChange}
          handleClick={handleSubmitMessage}
        />
      )}
    </div>
  )
}

export default ChatPage
