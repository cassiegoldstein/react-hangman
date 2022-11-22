import { useState } from 'react'
import './App.css'
import DisplayGuesses from './components/DisplayGuesses';
import DisplayPuzzle from './components/DisplayPuzzle';
import UserInput from './components/UserInput';
import axios from 'axios'

function App() {

  const [puzzle, setPuzzle] = useState('')
  const [lettersGuessed, setLettersGuessed] = useState([])

  const getPuzzle = () =>{
    axios.get("https://random-word-api.herokuapp.com/word").then((response) =>{
      console.log(response)
      console.log(response.data[0])
      setPuzzle(response.data[0]) //update state of puzzle
    }).catch((error) =>{
      console.log(error)
    })
  }

  const submitGuess = (event) => {
    event.preventDefault()

    const userGuess = document.getElementById('user-guess').value.toLowerCase()
    console.log(userGuess)
  }

  return (
    <div className="App">
      <button onClick = {getPuzzle}>Click</button>
      <DisplayPuzzle puzzle = {puzzle}/>
      <DisplayGuesses />
      <UserInput submitGuess = {submitGuess}/>
    </div>
  )
}

export default App
