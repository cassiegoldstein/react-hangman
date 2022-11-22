function DisplayGuesses (props) {
    
    const wrongGuesses = props.lettersGuessed.filter((guess) =>{
        if (!props.puzzle.includes(guess)){
            return guess
        }
    })
    
    return(
        <div>
            {wrongGuesses.join(", ")}
        </div>
    )
}

export default DisplayGuesses