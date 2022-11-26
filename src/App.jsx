import { useState, useEffect } from 'react'
import './App.css'
import DisplayPuzzle from './components/DisplayPuzzle';
import HangmanImg from './components/hangmanImg';
import UserInput from './components/UserInput';
import RestartButton from './components/restartButton';
import axios from 'axios'
import { FaHeart } from 'react-icons/fa';

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
    if (wrongGuesses.length > 5){
      alert(`You have lost the game! The word was ${puzzle}.`)
      window.location.reload();
      return
    }
    //get value of input when user clicks submit
    const userGuess = event.target.value.toLowerCase();
    console.log(userGuess)

    //create array of letters guessed by users and set lettersGuessed to that array
    const letters = [...lettersGuessed, userGuess]
    setLettersGuessed(letters)
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
      <div className="row heading">
       <h3 className="heartLives"><FaHeart/></h3>
       <h3 className="textLives">{6-wrongGuesses.length}</h3>
        <center>
       <h1 className="headerText">Let's Play Hangman!</h1> 
       </center>
       </div>
       <div className="row divider">
       </div>
       <div className="row divider2"></div>
      {/* determine if player won */}
       {(checkVictory() && puzzle.length > 0) ? <div className="row body"> 
          <h1 className = 'win'>You won!</h1> 
          {/* reload if user presses restart button */}
          <RestartButton />
          </div>
          :
          <div className="row body">
            <div className="row">
      <HangmanImg numWrong = {wrongGuesses.length}/>
      </div>
      <div className="row">
        <center>
      <DisplayPuzzle className="displayPuzzle" puzzle = {puzzle} lettersGuessed = {lettersGuessed}/>
      </center>
      </div>
      <div className="row">
      <UserInput lettersGuessed = {lettersGuessed} submitGuess = {submitGuess}/>
      </div>
      <RestartButton/>
    </div>
}
    </div>
  )
}


export default App
