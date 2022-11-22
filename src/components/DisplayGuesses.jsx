function DisplayGuesses (props) {
    return(
        <div>
            {props.lettersGuessed.join(", ")}
        </div>
    )
}

export default DisplayGuesses