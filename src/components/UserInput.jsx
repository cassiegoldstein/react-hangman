function UserInput (props) {

    const GenerateButtons =() => {
        return 'abcdefghijklmnopqrstuvwxyz'.split("").map(letter =>(
            <button onClick={props.submitGuess} id="user-guess" disabled = {props.lettersGuessed.includes(letter)} key={letter} value={letter} className="btn btn-primary m-2 greenBtn">
                {letter.toUpperCase()}
            </button>
        ))
    }

    //gets user input from buttons
    return(
        <div>
            <GenerateButtons/>
        </div>
    )
}

export default UserInput