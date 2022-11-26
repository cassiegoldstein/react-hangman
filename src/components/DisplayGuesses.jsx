function DisplayGuesses (props) {
    
    //creates array of wrong guesses by filtering through each guess 
    //and returning if puzzle does not include the guess
    const wrongGuesses = props.lettersGuessed.filter((guess) =>{
        if (!props.puzzle.includes(guess)){
            return guess
        }
    })
    //returns the wrong guesses to the DOM
    return(
        <div>
            {wrongGuesses.join(", ")}
        </div>
    )
}

export default DisplayGuesses