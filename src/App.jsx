import { useState } from 'react'
import './App.css'
import DisplayGuesses from './components/DisplayGuesses';
import DisplayWord from './components/DisplayWord';
import UserInput from './components/UserInput';

function App() {

  return (
    <div className="App">
     <h1>Hangman</h1>
     <UserInput/>
    </div>
  )
}

export default App
