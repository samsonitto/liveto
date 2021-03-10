import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import { getAll } from './utilities/getAll'
import './styles/style.css'

const App = () => {
  const [ events, setEvents ] = useState([])

  useEffect(() => {
    getAll()
      .then(data => {
        data.forEach((element, i) => {
          element.id = i + 1
        })
        setEvents(data)
        console.log(data)
      })
  }, [])

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

export default App;
