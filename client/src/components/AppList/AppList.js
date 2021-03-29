import React, { useEffect } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { useDispatch, useSelector } from 'react-redux'
import { deletePeople, fetchPeople } from '../../store/actions'
import { Loader } from '../UI/Loader/Loader'

export const AppList = () => {
  const dispatch = useDispatch()
  const people = useSelector(state => state.people.people)
  const loading = useSelector(state => state.app.loading)

  useEffect(() => {
    dispatch(fetchPeople())
  }, [dispatch])

  const clickHandler = id => {
    dispatch(deletePeople(id))
  }

  const list = () => {
    return people.map(person => (
        <ListItem key={person._id}>
          <ListItemText
            primary={person.name}
            secondary={person.image}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => clickHandler(person._id)}>
              <DeleteIcon/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )
    )
  }

  return (
    <div>
      <List>
        {loading ? <Loader/> : list()}
      </List>
    </div>
  )
}