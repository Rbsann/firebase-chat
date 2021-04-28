export const initialState = {
  careTeamUser: '',
  users: [],
  messages: [],
  loading: false,
  error: false
}

export default function Reducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_CARE_TEAM_USER':
      return { ...state, careTeamUser: action.user }
    case 'FETCH_USERS':
      return { ...state, loading: true }
    case 'FETCH_USERS_SUCCESS':
      return { ...state, loading: false, users: action.users }
    case 'SET_MESSAGES':
      return { ...state, messages: action.messages }
    default:
      return state
  }
}
