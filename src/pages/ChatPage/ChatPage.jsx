import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'

import { fetchUsers, syncMessages, sendMessage } from '../../redux/actions'
import { isEmpty } from 'lodash'

import Sidebar from '../../components/Sidebar/Sidebar'
import ChatBox from '../../components/ChatBox/ChatBox'

const ChatPage = () => {
  const [message, setMessage] = useState('')
  const [messagesToSend, setMessagesToSend] = useState([])
  const [dbHash, setDbhash] = useState('')

  const { userId } = useParams()
  const users = useSelector(state => state.users)
  const userMessages = useSelector(state => state.messages)
  const dispatch = useDispatch()

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
    setMessagesToSend({message: message })
    setMessage('')
  }

  useEffect(() => {
    if (dbHash && !isEmpty(messagesToSend)) dispatch(sendMessage(messagesToSend, dbHash))
  }, [messagesToSend, dispatch])

  return (
    <>
      <Sidebar handleClick={handleUserClick} users={users} />
      {(!isEmpty(userMessages)) && (
        <ChatBox
          messages={userMessages}
          message={message}
          handleInputChange={handleInputChange}
          handleClick={handleSubmitMessage}
        />
      )}
    </>
  )
}

export default ChatPage
