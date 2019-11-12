import { combineReducers } from 'redux'
import answer from './answer'
import quiz from './quiz'

export default combineReducers({
  answer,
  quiz
})