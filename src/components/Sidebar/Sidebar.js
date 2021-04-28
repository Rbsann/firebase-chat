import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@material-ui/core'
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons'

import SidebarUsers from '../SidebarUsers/SidebarUsers'

import './Sidebar.css'

const Sidebar = ({ users, handleClick }) => {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlined />
          <input placeholder='Search or start new chat' type='text' />
        </div>
      </div>

      <div className='sidebar__chats'>
        {users.map((user, index) => {
          return (
            <SidebarUsers
              key={index + 1}
              handleClick={handleClick}
              patientsId={user.id}
              patientsName={user.data.name}
            />
          )
        })}
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  user: PropTypes.array,
  handleClick: PropTypes.func
}

export default Sidebar
