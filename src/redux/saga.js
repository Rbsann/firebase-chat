import { call, put, takeLatest, fork, take, cancel, all } from 'redux-saga/effects'
import { fetchUsersSuccess, loginError, loginSuccess, setMessages, login, } from './actions'
import reduxSagaFirestore from '../firebase'
import firebase from 'firebase'
import queryUserCollection from '../services/queryCollection'
import lodash from 'lodash'


function * getUsers () {
  const snapshot = yield call(reduxSagaFirestore.firestore.getCollection, 'beneficiaries')
  const users = snapshot.docs.map(docs => ({ id: docs.id, data: docs.data() }))
  yield put(fetchUsersSuccess(users))
}

const transformMessages = (messages) => {
  console.log(messages)
  return messages.docs.map(msg => msg.data()).sort((a ,b) => {
    return Date.parse(a.createdAt) - Date.parse(b.createdAt)
  })
}
// todo add another collection for last messages, so we cna listen just to that collection, keeping
// this collection updatable only on click

function * syncMessagesSaga ({ userId, patientId }) {
  console.log(userId, patientId)
  const task = yield fork(
    reduxSagaFirestore.firestore.syncCollection,
    `chat-dev/${userId}-${patientId}/messages`,
    {
      successActionCreator: setMessages,
      transform: transformMessages
    }
  )

  yield take('CHANGE_MESSAGE')
  yield cancel(task)
}

function * sendMessage ({ message, dbHash }) {
  console.log(Date.parse(message.createdAt))
  console.log(message)
  try {
    yield call(
      reduxSagaFirestore.firestore.addDocument,
      `chat-dev/${dbHash}/messages`,
      message
    )
  } catch (e) {
    console.log(e)
  }
}

function * loginPopup({userData}) {
  const authProvider = new firebase.auth.GoogleAuthProvider();
  console.log(authProvider)

  try {
    const response = yield call(reduxSagaFirestore.auth.signInWithPopup, authProvider)
    const {idToken} = response
    yield put(loginSuccess(userData, idToken))
    console.log(response)
  } catch(e) {
    console.log(e)
  }
}

function * preLogin({ email }) {
  try {
    const response = yield call(queryUserCollection, email)
    if (lodash.isEmpty(response)) throw new Error('no user found')
    console.log(response)
    const userData = response[0].data()
    console.log(userData)
    yield put(login(userData))
  } catch(e) {
    console.log(e)
    yield put(loginError(e))
  }
}

export default function * rootSaga () {
  yield takeLatest('FETCH_USERS', getUsers)
  yield takeLatest('SYNC_MESSAGES', syncMessagesSaga)
  yield takeLatest('SEND_MESSAGE', sendMessage)
  yield takeLatest('LOGIN', loginPopup)
  yield takeLatest('PRE_LOGIN', preLogin)
}
