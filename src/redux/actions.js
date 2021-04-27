export const setCareTeamUser = (hash) => {
  return {
    type: 'SET_CARE_TEAM_USER',
    hash
  }
}

export const fetchUsers = () => {
  return {
    type: 'FETCH_USERS'
  }
}

export const fetchUsersSuccess = (users) => {
  return {
    type: 'FETCH_USERS_SUCCESS',
    users
  }
}

export const syncMessages = () => {
  return {
    type: 'SYNC_MESSAGES'
  }
}

export const setMessages = (messages) => {
  return {
    type: 'SET_MESSAGES',
    messages
  }
}

export const changeMessage = () => {
  return {
    type: 'CHANGE_MESSAGE'
  }
}

export const setUserMessage = (message, dbHash) => {
  console.log('messgae', message, dbHash)
  return {
    type: 'SET_USER_MESSAGE',
    message,
    dbHash
  }
}

export const sendMessage = (message, dbHash) => {
  console.log(dbHash, 'actopn', message)
  return {
    type: 'SEND_MESSAGE',
    message,
    dbHash
  }
}
