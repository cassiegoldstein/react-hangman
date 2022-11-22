function UserInput () {


    return(
        <div>
            <form onSubmit ={(event) => {event.preventDefault()
            console.log('submitted')}}>
                <label>Input Guess: </label>
                <input id= 'user-guess' maxLength  = '1' type= 'text' />
                <button type = "submit">Submit</button>
                </form>
        </div>
    )
}

export default UserInput