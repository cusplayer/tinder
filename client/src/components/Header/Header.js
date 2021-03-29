import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton'
import PersonIcon from '@material-ui/icons/Person'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import MenuIcon from '@material-ui/icons/Menu'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'

import classes from './Header.module.scss'
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = isOpen => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setIsOpen(isOpen)
  }

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <NavLink to='/' exact>
          <ListItem button={true}>
            <ListItemIcon><WhatshotIcon/></ListItemIcon>
            <ListItemText primary={'Tinder'}/>
          </ListItem>
        </NavLink>
        <NavLink to='/person'>
          <ListItem button={true}>
            <ListItemIcon><PersonIcon/></ListItemIcon>
            <ListItemText primary={'Add person'}/>
          </ListItem>
        </NavLink>
        <NavLink to='/list'>
          <ListItem button={true}>
            <ListItemIcon><FormatListBulletedIcon/></ListItemIcon>
            <ListItemText primary={'People list'}/>
          </ListItem>
        </NavLink>
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon/>
          </IconButton>
          <Drawer anchor={'left'} open={isOpen} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  )
}
