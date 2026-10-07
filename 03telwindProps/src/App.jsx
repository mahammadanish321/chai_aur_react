import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {


  return (
    <>
     <div className="min-h-screen bg-white-100 flex items-center justify-center p-6">
      <div className="w-80 bg-yellow-200 border-l-8 border-yellow-500 shadow-lg rounded-r-xl p-5 transform rotate-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">
          Note
        </p>
        <h2 className="mt-3 text-xl font-bold text-gray-800">
          Learn React
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Practice daily, build small projects, and keep your code simple.
        </p>
      </div>
    </div>
    </>
  )
}

export default App
