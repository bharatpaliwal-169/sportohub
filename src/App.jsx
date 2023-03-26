import React from 'react'
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom'
import {Landing,Home,Auth,Error404} from './pages'

const App = () => {
  return (
    <>
      <div className=''>
        <Router>
          <Routes>
            <Route path='/' exact Component={Landing}></Route>
            <Route path='/home' exact Component={Home}></Route>
            <Route path='/auth' exact Component={Auth}></Route>
            <Route path='/404' exact Component={Error404}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;