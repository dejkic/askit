import authReducer from './authReducer'
import questionReducer from './questionReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    questions: questionReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer
