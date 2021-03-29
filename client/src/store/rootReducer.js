import { combineReducers } from 'redux'
import { peopleReducer } from './peopleReducer'
import { appReducer } from './appReducer'

export const rootReducer = combineReducers({
  people: peopleReducer,
  app: appReducer
})