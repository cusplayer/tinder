import React, { useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import './Cards.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPeople } from '../../store/actions'
import { Loader } from '../UI/Loader/Loader'

function Cards (props) {
  const dispatch = useDispatch()
  const people = useSelector(state => state.people.people)
  const loading = useSelector(state => state.app.loading)

  useEffect(() => {
    dispatch(fetchPeople())
  }, [dispatch])

  const onSwipe = (direction, nameToDelete) => {
    console.log('Remove:', nameToDelete, direction)
  }

  const onCardLeftScreen = (direction, name) => {
    console.log(name, direction, 'left the screen!')
  }

  const renderPeople = () => {
    return people.map(person => (
      <TinderCard
        className='cards__card'
        key={person._id}
        preventSwipe={['up', 'down']}
        onSwipe={direction => onSwipe(direction, person._id)}
        onCardLeftScreen={direction => onCardLeftScreen(direction, person.name)}
      >
        <div
          style={{ backgroundImage: `url(${person.image})` }}
          className="cards__card_photo"
        >
          <h3>{person.name}</h3>
        </div>
      </TinderCard>
    ))
  }

  return (
    <div className='cards'>
      {loading ? <Loader/> : renderPeople()}
    </div>
  )
}

export default Cards