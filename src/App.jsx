import { useState, useEffect } from 'react'
import './App.css'
import DisplayGuesses from './components/DisplayGuesses';
import DisplayPuzzle from './components/DisplayPuzzle';
import UserInput from './components/UserInput';
import axios from 'axios'

function App() {
  //word to guess
  const [puzzle, setPuzzle] = useState('')
  //array of previous letters guessed
  const [lettersGuessed, setLettersGuessed] = useState([])

  //get word from random word api
  const getPuzzle = () =>{
    axios.get("https://random-word-api.herokuapp.com/word").then((response) =>{
      console.log(response.data[0])
      setPuzzle(response.data[0]) //update word to be guessed
    }).catch((error) =>{
      console.log(error)
    })
  }

  //getPuzzle is called when page is loaded
  useEffect( () =>{
    getPuzzle()
  }, [])//empty array means function is only called on first render


  //wrongGuesses filters lettersGuessed array by each guess, 
  //and returns if the word to guess does not include the letter.
  //wrongGuesses is an array of letters that are not in the word
  const wrongGuesses = lettersGuessed.filter((guess) =>{
    return !puzzle.includes(guess)
  })

  //function runs when submit is pressed
  const submitGuess = (event) => {
    event.preventDefault() //prevent page from reloading
    //display alert and reload game when user guesses six wrong answers
    if (wrongGuesses.length > 6){
      alert(`You have lost the game! The word was ${puzzle}.`)
      window.location.reload();
      return
    }
    //get value of input when user clicks submit
    const userGuess = document.getElementById('user-guess').value.toLowerCase()
    console.log(userGuess)
 
    if (userGuess === ''){ //alert if guess is empty
      alert('Please input a guess!')
      return
    } else if (lettersGuessed.includes(userGuess)){ //alert if letter has already been guessed
      alert('You have already guessed this letter!')
      return
    }

    //create array of letters guessed by users and set lettersGuessed to that array
    const letters = [...lettersGuessed, userGuess]
    setLettersGuessed(letters)

    document.getElementById('user-guess').value = '' //input turns empty on submit
  }


  //determine if player has won the game
  const checkVictory = () => {
    for (let letter of puzzle){ //for each letter in word...
      if (!lettersGuessed.includes(letter)){ //if lettersGuessed array does not include letter...
        return false 
      }
    }
    return true //user has won the game if gets through for loop without being false
  }


  return (
    <div className="App">
      <h1>Let's Play Hangman!</h1> 
      {/* determine if player won */}
       {(checkVictory() && puzzle.length > 0) ? <div> 
          <h1>You won!</h1> 
          {/* reload if user presses restart button */}
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
