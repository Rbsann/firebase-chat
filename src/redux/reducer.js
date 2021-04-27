export const initialState = {
  careTeamUser: '',
  users: [],
  messages: [],
  loading: false,
  error: false,
  messageHash: '',
  userMessage:[],
  dbUserHash: ''
}

export default function Reducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_CARE_TEAM_USER':
      return { ...state, careTeamUser: action.user }
    case 'FETCH_USERS':
      return { ...state, loading: true }
    case 'FETCH_USERS_SUCCESS':
      return { ...state, loading: false, users: action.users }
    case 'SYNC_MESSAGES':
      return { ...state, messageHash: action.messageHash }
    case 'SET_MESSAGES':
      return { ...state, messages: action.messages }
    case 'CHANGE_MESSAGES':
      return { ...state }
    case 'SET_USER_MESSAGE':
      return {...state, userMessage: action.message, dbUserHash: action.dbHash}
    default:
      return state
  }
}
