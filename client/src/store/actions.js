import { ADD_PEOPLE, DELETE_PEOPLE, FETCH_PEOPLE, HIDE_LOADER, SHOW_LOADER } from './types'
import axios from '../utils/axios'

export function addPerson (person) {
  return async dispatch => {
    await axios.post('/cards', { name: person.name, image: person.url })
    dispatch({ type: ADD_PEOPLE, payload: person })
  }
}

export function fetchPeople () {
  return async dispatch => {
    dispatch(showLoader())
    const response = await axios.get('/cards')
    dispatch({ type: FETCH_PEOPLE, payload: response.data })
    dispatch(hideLoader())
  }
}

export function showLoader () {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader () {
  return {
    type: HIDE_LOADER
  }
}

export function deletePeople (id) {
  return async dispatch => {
    const response = await axios.delete(`/cards/${id}`)
    dispatch({type: DELETE_PEOPLE, payload: response.data._id})
  }
}