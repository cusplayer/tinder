import { ADD_PEOPLE, DELETE_PEOPLE, FETCH_PEOPLE } from './types'

const initialState = {
  people: [],
}

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PEOPLE:
      return {
        ...state,
        people: [...state.people, action.payload]
      }
    case FETCH_PEOPLE:
      return {
        ...state,
        people: action.payload
      }
    case DELETE_PEOPLE:
      return {
        ...state,
        people: state.people.filter(p => p._id !== action.payload)
      }
    default:
      return state
  }
}