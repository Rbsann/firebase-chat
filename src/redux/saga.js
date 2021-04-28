import { call, put, takeLatest, fork, take, cancel } from 'redux-saga/effects'
import { fetchUsersSuccess, setMessages } from './actions'
import reduxSagaFirestore from '../firebase'

function * getUsers () {
  const snapshot = yield call(reduxSagaFirestore.firestore.getCollection, 'users-dev-firebase')
  const users = snapshot.docs.map(docs => ({ id: docs.id, data: docs.data() }))
  yield put(fetchUsersSuccess(users))
}

const transformMessages = (messages) => {
  return messages.data().messages
}
// todo add another collection for last messages, so we cna listen just to that collection, keeping
// this collection updatable only on click

function * syncMessagesSaga ({ userId, patientId }) {
  const task = yield fork(
    reduxSagaFirestore.firestore.syncDocument,
    `messages-dev-firebase/${userId}${patientId} `,
    {
      successActionCreator: setMessages,
      transform: transformMessages
    }
  )

  yield take('CHANGE_MESSAGE')
  yield cancel(task)
}

function * sendMessage ({ message, dbHash }) {
  try {
    yield call(
      reduxSagaFirestore.firestore.setDocument,
      `messages-dev-firebase/${dbHash}`,
      { messages: message },
      { merge: true }
    )
  } catch (e) {
    console.log(e)
  }
}

export default function * rootSaga () {
  yield takeLatest('FETCH_USERS', getUsers)
  yield takeLatest('SYNC_MESSAGES', syncMessagesSaga)
  yield takeLatest('SEND_MESSAGE', sendMessage)
}
