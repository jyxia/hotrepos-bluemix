import { combineReducers } from 'redux'
import imageList from './screensReducer'
import message from './messageReducer'

const rootReducer = combineReducers({
  imageList,
  message
})

export default rootReducer
