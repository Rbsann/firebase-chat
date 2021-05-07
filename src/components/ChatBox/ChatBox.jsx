import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@material-ui/core'
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  Send
} from '@material-ui/icons'
import './ChatBox.css'

const Chat = ({ messages, handleInputChange, handleClick, message, userId }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom()
  },[messages])


  return (
    <div className='chat'>

      <div className='chat__body'>
        {messages?.map((message, index) => (
          <>
            {message.from === userId ? (
              <div className='user-msg' key={index + 1}>
                <span className='box'>{message.message}</span>
              </div>
            ): (
                <div className='patient-msg' key={index + 1}>
                  <span className='box'>{message.message}</span>
                </div>
            )}
          </>

        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className='chat__footer'>
        <form>
          <input
            type='text'
            value={message}
            id='chatInput'
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder='Type a message'
          />
          <button onClick={(event) => handleClick(event)} type='submit'>
            <Send />
          </button>
        </form>
      </div>
    </div>
  )
}

Chat.propTypes = {
  message: PropTypes.string,
  messages: PropTypes.array,
  handleClick: PropTypes.func,
  handleInputChange: PropTypes.func
}

export default Chat
