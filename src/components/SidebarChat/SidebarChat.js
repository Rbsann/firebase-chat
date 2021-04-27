/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

import "./SidebarChat.css";
import { customStyles } from "../CustomModalStyles";
import { syncMessages, setUserMessage } from '../../redux/actions'
import { Route, BrowserRouter as Router, Switch, useParams } from 'react-router-dom'
import Chat from '../Chat/Chat'

function SidebarChat({ patientsId, patientsName }) {
  const { userId } = useParams()
  const allMessages = useSelector(state => state.messages)
  const [userMessages, setUserMessages] = useState('')
  const dispatch = useDispatch()
  console.log()

  const openMessages = (patientsId) => {
    // todo: fix spaces
    const messages = allMessages.filter(message => message.id === `${userId}${patientsId} `)
    console.log(messages)
    console.log(patientsId)
    console.log(userId)
    dispatch(setUserMessage(messages[0], `${userId}${patientsId} `))
  }

  useEffect(() => {
    console.log(userMessages)
  },[userMessages])

  useEffect(() => {
    dispatch(syncMessages())
  }, [])

  return (
    <>
      <div onClick={() => openMessages(patientsId)} className="sidebarChat">
        <div className="sidebarChat__info">
          <h2>{patientsName}</h2>
        </div>
      </div>
    </>
  )
}

export default SidebarChat;
