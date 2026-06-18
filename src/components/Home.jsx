import React from 'react'
import {useTheme }from '../context/Theme'

function Home() {
    const {darkMode} = useTheme();
  return (
    <div className={`p-6 ${darkMode? "bg-gray-900 text-white" : "bg-white text-black h-full"} `}>

      <h2>Welcome to Home page</h2>
      <p>This section also changes theme</p>
    </div>
  )
}

export default Home
