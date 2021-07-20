import React, {useState} from 'react'
import "./App.css"
import Login from './Login'
import Welcome from './Welcome'

const App = () => {

  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null)

  return (
    <div style={{display: 'flex', justifyContent: 'center'}} className="pt-5">
      {!user?(
        <Login user={user} setUser={setUser} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
      ):(
        <Welcome user={user}/>
      )}
    </div>
  )
}

export default App
