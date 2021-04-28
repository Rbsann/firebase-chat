import React from 'react'
import PropTypes from 'prop-types'
import './SidebarUsers.css'

function SidebarChat ({ patientsId, patientsName, handleClick }) {
  return (
    <>
      <div onClick={() => handleClick(patientsId)} className='sidebarChat'>
        <div className='sidebarChat__info'>
          <h2>{patientsName}</h2>
        </div>
      </div>
    </>
  )
}

SidebarChat.propTypes = {
  patiendsId: PropTypes.string,
  patientsName: PropTypes.string,
  handleClick: PropTypes.func
}

export default SidebarChat
