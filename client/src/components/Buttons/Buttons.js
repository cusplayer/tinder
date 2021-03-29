import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import IconButton from '@material-ui/core/IconButton'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'
import './Buttons.scss'

function Buttons () {



  return (
    <div className='buttons'>
      <IconButton className='buttons__repeat' onClick={() => console.log('click')}>
        <ReplayIcon fontSize='large'/>
      </IconButton>
      <IconButton className='buttons__left'>
        <CloseIcon fontSize='large'/>
      </IconButton>
      <IconButton className='buttons__star'>
        <StarRateIcon fontSize='large'/>
      </IconButton>
      <IconButton className='buttons__right'>
        <FavoriteIcon fontSize='large'/>
      </IconButton>
      <IconButton className='buttons__lightning'>
        <FlashOnIcon fontSize='large'/>
      </IconButton>
    </div>
  )
}

export default Buttons