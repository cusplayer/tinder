import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Buttons from '../Buttons/Buttons'
import { Header } from '../Header/Header'
import Cards from '../Cards/Cards'
import { AddForm } from '../AddForm/AddForm'
import { Container } from '@material-ui/core'
import { AppList } from '../AppList/AppList'

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Container>
          <Switch>
            <Route exact path="/">
              <Cards/>
              {/* <Buttons/> */}
            </Route>
            <Route path='/person'>
              <AddForm/>
            </Route>
            <Route path='/list'>
              <AppList/>
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  )
}

export default App
