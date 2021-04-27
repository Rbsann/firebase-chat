import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';

import SidebarChat from '../SidebarChat/SidebarChat';
import db from '../../firebase';

import './Sidebar.css';

const Sidebar = ({ users }) => {
  console.log(users)

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
            <SidebarChat key={index + 1} patientsId={user.id} patientsName={user.data.name} />
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
