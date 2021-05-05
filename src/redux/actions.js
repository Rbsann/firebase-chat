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

export const syncMessages = (userId, patientId) => {
  return {
    type: 'SYNC_MESSAGES',
    userId,
    patientId
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

export const sendMessage = (message, dbHash) => {
  return {
    type: 'SEND_MESSAGE',
    message,
    dbHash
  }
}


export const login = (email, password) => {
  console.log('teste')
  return {
    type: 'LOGIN',
    email,
    password
  }
}