function DisplayPuzzle (props) {
    //display words and correctly guessed letters
    const handleDisplay = () =>{
        return props.puzzle.split('').map((letter) =>{ //split puzzle by letter and map through each letter
           if(props.lettersGuessed.includes(letter)) { //if letters guessed array include the letter, return letter
            return letter
           } else{
                return ' __ ' //else, return '_'
           }
        })
    }

    //displays word - initially all underlines
    return(
        <div>
            <h1 className="puzzle">{handleDisplay()} </h1>
        </div>
    )
}

export default DisplayPuzzle