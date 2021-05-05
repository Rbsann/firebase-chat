import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@material-ui/core'
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  Send
} from '@material-ui/icons'
import './ChatBox.css'

const Chat = ({ messages, handleInputChange, handleClick, message }) => {
  console.log(messages)
  return (
    <div className='chat'>
      <div className='chat__header'>
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
        <div className='chat__headerRight'>
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

      <div className='chat__body'>
        {messages?.map((message, index) => (
          <div key={index + 1}>
            {/* <span className="chat__name">{message.name}</span> */}
            <span className='chat__messageText'>{message.message}</span>
          </div>
        ))}
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
