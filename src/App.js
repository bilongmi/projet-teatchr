import React from 'react'
import "./App.css"
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

function App() {

  return (
    <div className='main-container'>
        <Sidebar step={2} />
        <Main />
    </div>
  )
}

export default App