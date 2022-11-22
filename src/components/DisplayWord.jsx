import { useState } from 'react'
import words from "../data/words.json"
import UserInput from './UserInput';


function DisplayWord(props) {
    const displayHiddenWord = () =>{
        return props.wordToGuess.split("").map(letter => {
            for(let i =0; i< props.allGuesses.length; i++){
                
            }
        })
    }

    return(
        <div>
        <h2>Word to guess goes here: {props.wordToGuess}</h2>
        </div>
    )
}

export default DisplayWord