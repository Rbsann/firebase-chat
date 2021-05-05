import { call, put, takeLatest, fork, take, cancel, all } from 'redux-saga/effects'
import { fetchUsersSuccess, setMessages } from './actions'
import reduxSagaFirestore from '../firebase'

function * getUsers () {
  const snapshot = yield call(reduxSagaFirestore.firestore.getCollection, 'users-dev-firebase')
  const users = snapshot.docs.map(docs => ({ id: docs.id, data: docs.data() }))
  yield put(fetchUsersSuccess(users))
}

const transformMessages = (messages) => {
  return messages.docs.map(msg => msg.data())
}
// todo add another collection for last messages, so we cna listen just to that collection, keeping
// this collection updatable only on click

function * syncMessagesSaga ({ userId, patientId }) {
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
  const messages = Array.from(Array(1000).keys())
  console.log(messages)
  try {
    yield all(messages.map(x => call(
      reduxSagaFirestore.firestore.addDocument,
      `chat-dev/${dbHash}/messages`,
      { message: x }
    )))
  } catch (e) {
    console.log(e)
  }
}

function * login({email, password}) {
  try {
    const response = yield call(reduxSagaFirestore.auth.signInWithEmailAndPassword, email, password)
    console.log(response)
  } catch(e) {
    console.log(e)
  }
}

export default function * rootSaga () {
  yield takeLatest('FETCH_USERS', getUsers)
  yield takeLatest('SYNC_MESSAGES', syncMessagesSaga)
  yield takeLatest('SEND_MESSAGE', sendMessage)
  yield takeLatest('LOGIN', login)
}
