import { useState } from 'react'
import DisplayGuesses from './DisplayGuesses'
import DisplayWord from './DisplayWord'
import words from "../data/words.json"


function UserInput(props) {

    const [currentGuess, setCurrentGuess] = useState("Guess a Letter")
    const [allGuesses, setAllGuesses] = useState([])

    //set all words to array of words from data/words.json
    const [allWords, setAllWords] = useState(words.map((word) => {
        return {
          wordToGuess: word,
        }
    }))

        //get random word from array using random number
        let randomNum = Math.floor(Math.random() * 27);
        let wtg = allWords[randomNum];
        let wordToGuess = wtg.wordToGuess
        console.log(wordToGuess);

    //set current guess to value that user inputs
    const handleUserInput = (e) =>{
        console.log(e.target.value)
        setCurrentGuess(e.target.value)
    }

    //when user presses enter, their current guess will be added to an array
    const handleSubmitGuess = (e) =>{
        e.preventDefault();
        const allGuessesCopy = [...allGuesses]
        allGuessesCopy.push(currentGuess)
        setAllGuesses(allGuessesCopy)
        console.log(allGuesses)
    }

    return(
        <div>
        <DisplayWord wordToGuess = {wordToGuess} allGuesses={allGuesses}/>
        <form onSubmit={handleSubmitGuess}>
            <input type="text" value={currentGuess} onChange={handleUserInput}></input>
        </form>
        <DisplayGuesses allGuesses={allGuesses}/>
        </div>
    )
}

export default UserInput