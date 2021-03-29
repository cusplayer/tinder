import React, { useState } from 'react'

import classes from './AddForm.module.scss'

import { FormControl, InputLabel, Input, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { addPerson } from '../../store/actions'

export const AddForm = () => {
  const [form, setForm] = useState({
    name: '',
    url: ''
  })
  const dispatch = useDispatch()

  const changeHandler = event => {
    setForm(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const submitHandler = event => {
    event.preventDefault()
    dispatch(addPerson(form))
  }

  return (
    <form className={classes.AddFrom} onSubmit={submitHandler}>
      <FormControl fullWidth={true} margin={'normal'}>
        <InputLabel htmlFor="name">Full name</InputLabel>
        <Input id="name" name='name' onChange={changeHandler} value={form.name}/>
      </FormControl>
      <FormControl fullWidth={true}>
        <InputLabel htmlFor="url">Photo URL</InputLabel>
        <Input id="url" name='url' onChange={changeHandler} value={form.url}/>
      </FormControl>
      <Button fullWidth={true} color={'primary'} type={'submit'}>Добавить</Button>
    </form>
  )
}