import eventService from '../utilities/events'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_EVENTS':
      state = { ...state, 'events': action.data }
      return state

    case 'INIT_ONE':
      state = { ...state, 'activeEvent': action.data[0] }
      return state

    default:
      return state
  }
}

export const initializeEvents = () => {
  return async dispatch => {
    const events = await eventService.getAll()

    dispatch({
      type: 'INIT_EVENTS',
      data: events
    })
  }
}

export const initializeOneEvent = (slug) => {
  return async dispatch => {
    const event = await eventService.getOne(slug)
    
    dispatch({
      type: 'INIT_ONE',
      data: event
    })
  }
}

export default reducer