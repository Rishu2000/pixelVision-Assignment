import React, {useState} from 'react'
import "./App.css"
import Login from './Login'
import Welcome from './Welcome'

const App = () => {

  const [userAuth, setUserAuth] = useState(false);

  return (
    <div style={{display: 'flex', justifyContent: 'center'}} className="pt-5">
      {!userAuth?(
        <Login setUserAuth={setUserAuth}/>
      ):(
        <Welcome/>
      )}
    </div>
  )
}

export default App
