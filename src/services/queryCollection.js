import firebase from 'firebase'

const queryUserCollection = async(email) => {
  const db = firebase.firestore()
  const response = await db.collection('users-saas').where('email', '==', email).get()
  return response.docs
}

export default queryUserCollection