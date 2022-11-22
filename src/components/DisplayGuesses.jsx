function DisplayGuesses(props) {
    
    return(
        //we passed in all of our guesses, and they will be displayed when user presses enter
        <h4>{props.allGuesses.join(", ")}</h4>
    )
}

export default DisplayGuesses