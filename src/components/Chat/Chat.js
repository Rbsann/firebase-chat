import React, { useEffect, useRef, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
  Send,
} from "@material-ui/icons";
import { sendMessage } from '../../redux/actions'
import firebase from "firebase";

import "./Chat.css";
import { useDispatch } from "react-redux";

const Chat = ({messages, dbUserHash}) => {
  console.log(messages, 'messagessss')
  const dispatch = useDispatch()
  const [allMessages, setAllMessages] = useState([])

  const [message, setMessage] = useState('')

  const submitMessage = (e) => {
    e.preventDefault()
    setAllMessages([...messages.data.messages, { content: message }])
    setMessage('')
    console.log(e)
  };

  const handleMessageInput = (message) => {
    setMessage(message)
  }

  useEffect(() => {
    console.log(dbUserHash)
    console.log(allMessages)
    dispatch(sendMessage(allMessages, dbUserHash))
  }, [allMessages])

  return (
    <div className="chat">
      <div className="chat__header">
        {/* <div className="chat__headerInfo">
          {messages.length > 0 && (
            <p>
              Last seen{" "}
              {new Date(
                messages[messages.length - 1]?.timestamp?.toDate()
              ).toLocaleString()}
            </p>
          )}
        </div> */}
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages?.data?.messages.map((message) => (
          <p
          >
            {/* <span className="chat__name">{message.name}</span> */}
            <span className="chat__messageText">{message.content}</span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <form>
          <input
            type="text"
            value={message}
            id="chatInput"
            onChange={(e) => handleMessageInput(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={(event) => submitMessage(event)} type="submit">
            <Send />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
