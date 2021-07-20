import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import "./App.css"
import Login from './Login'

const App = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}} className="pt-5">
      <Switch>
        <Route path="/" exact={true}>
          <Link to="/login">
            <button className="btn btn-primary btn-lg">
              Login
            </button>
          </Link>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
