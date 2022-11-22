function UserInput (props) {


    return(
        <div>
            <form onSubmit ={props.submitGuess}>
                <label>Input Guess: </label>
                <input id= 'user-guess' maxLength  = '1' type= 'text' />
                <button type = "submit">Submit</button>
                </form>
        </div>
    )
}

export default UserInput