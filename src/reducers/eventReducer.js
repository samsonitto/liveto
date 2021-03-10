import eventService from '../utilities/events'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_EVENTS':
      state = { 'events': action.data }
      return state

    default:
      return state;
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

export default reducer