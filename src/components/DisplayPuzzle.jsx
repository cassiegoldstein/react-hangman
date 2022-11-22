function DisplayPuzzle (props) {

    const handleDisplay = () =>{
        return props.puzzle.split('').map((letter) =>{
           if(props.lettersGuessed.includes(letter)) {
            return letter
           } else{
                return ' _ '
           }
        })
    }


    return(
        <div>
            <h1> Word: {handleDisplay()} </h1>
        </div>
    )
}

export default DisplayPuzzle