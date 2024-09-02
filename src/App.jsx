import React from 'react'
import Feed from './components/Feed'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='h-full w-full bg-black relative overflow-hidden'>
      <div className='absolute h-screen w-full'>
        <Navbar />
      </div>
      <div className='fixed h-screen'>
        <Sidebar />
      </div>
      <Feed />
    </div>
  )
}

export default App