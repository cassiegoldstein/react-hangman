import { useState, useEffect } from 'react'
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
      setPuzzle(response.data[0]) //update word to be guessed
    }).catch((error) =>{
      console.log(error)
    })
  }

  useEffect( () =>{
    getPuzzle()
  }, [])

  const submitGuess = (event) => {
    event.preventDefault()
    //get value when user clicks submit
    const userGuess = document.getElementById('user-guess').value.toLowerCase()
    console.log(userGuess)
 
    if (userGuess === ''){ //alert if guess is empty
      alert('Please input a guess!')
      return
    } else if (lettersGuessed.includes(userGuess)){ //alert if letter has been guessed
      alert('You have already guessed this letter!')
      return
    }

    //create array of letters guessed by users and set lettersGuessed to that array
    const letters = [...lettersGuessed, userGuess]
    setLettersGuessed(letters)

    document.getElementById('user-guess').value = '' //empty input on submit
  }



  return (
    <div className="App">
      <DisplayPuzzle puzzle = {puzzle} lettersGuessed = {lettersGuessed}/>
      <UserInput submitGuess = {submitGuess}/>
      <DisplayGuesses lettersGuessed = {lettersGuessed}/>
    </div>
  )
}

export default App
