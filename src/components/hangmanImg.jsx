import step1 from './images/1.png';
import step2 from './images/2.png';
import step3 from './images/3.png';
import step4 from './images/4.png';
import step5 from './images/5.png';
import step6 from './images/6.png';
import step7 from './images/7.png';


function HangmanImg (props) {

    let num;
    const getNum = () => {
        if(props.numWrong === 0){
            num = step1
        }
        else if(props.numWrong === 1){
            num = step2
        }
        else if(props.numWrong === 2){
            num = step3
        }
        else if(props.numWrong === 3){
            num = step4
        }
        else if(props.numWrong === 4){
            num = step5
        }
        else if(props.numWrong === 5){
            num = step6
        }
        else{
            num = step7
        }
        return num
    }


    return(
        <div>
            <center>
            <img style={{width: 200, height: 225}} src={getNum()} className="hangman" />
            </center>
            </div>
    )
}

export default HangmanImg