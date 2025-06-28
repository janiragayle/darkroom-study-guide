import { useState } from 'react'
import './App.css'
import DarkroomTerms from './components/darkroomTerms'

function App() {
  return(
    <div className='App'>
      <h1>Learn Terminlogy for Darkroom Photography!</h1>
      <h3>The darkroom and film photography has so many terms and sayings, 
        sometimes it can be hard to keep up. <br></br>Practice with these flashcards so
         the next the time your professor tells you to burn your prints you don't 
         look for the nearest fire extinguisher!</h3>
         <DarkroomTerms />
         
    </div>
  )
}

export default App
