import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import './styles/style.css'
import { useDispatch, useSelector } from 'react-redux'
import { initializeEvents } from './reducers/eventReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeEvents())
  }, [])

  const events = useSelector(state => {
    return state.events
  })

  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <Home events={events} />
            </Route>
            <Route path="/:id">
              
            </Route>
          </Switch>
      </Router>
    </div>
  )
}

export default App
