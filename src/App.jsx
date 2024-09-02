import React from 'react'
import Feed from './components/Feed'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='h-full w-full bg-black relative'>
      <div className='fixed h-screen'>
        <Sidebar />
      </div>
      <Feed />
    </div>
  )
}

export default App