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


export const login = (userData) => {
  return {
    type: 'LOGIN',
    userData
  }
}

export const loginSuccess = (userData, token) => {
  console.log(userData)
  return {
    type: 'LOGIN_SUCCESS',
    userData,
    token
  }
}

export const loginError = (error) => {
  return {
    type: 'LOGIN_ERROR',
    error
  }
}

export const preLogin = (email) => {
  return {
    type: 'PRE_LOGIN',
    email
  }
}