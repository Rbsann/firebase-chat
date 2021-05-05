import { connect } from 'react-redux'
import { login } from '../../actions/authentication'
import Login from './Login'

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => login(dispatch, data)
  }
}

export default connect(null, mapDispatchToProps)(Login)
