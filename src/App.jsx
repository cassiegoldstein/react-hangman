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

  const wrongGuesses = lettersGuessed.filter((guess) =>{
    return !puzzle.includes(guess)
  })


  const submitGuess = (event) => {
    event.preventDefault()

    if (wrongGuesses.length > 6){
      alert(`You have lost the game! The word was ${puzzle}.`)
      window.location.reload();
      return
    }
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


  const checkVictory = () => {
    for (let letter of puzzle){
      if (!lettersGuessed.includes(letter)){
        return false
      }
    }
    return true
  }


  return (
    <div className="App">
      <h1>Let's Play Hangman!</h1>
       {(checkVictory() && puzzle.length > 0) ? <div>
          <h1>You won!</h1>
          <button onClick={() => window.location.reload()}>Restart Game!</button>
          </div>
          :
          <div>
      <DisplayPuzzle puzzle = {puzzle} lettersGuessed = {lettersGuessed}/>
      <UserInput submitGuess = {submitGuess}/>
      <DisplayGuesses lettersGuessed = {lettersGuessed} puzzle = {puzzle}/>
    </div>
}
    </div>
  )
}


export default App
