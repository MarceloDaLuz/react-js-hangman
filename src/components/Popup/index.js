import React, {useEffect} from 'react';
import { checkWin } from '../../helpers';

const Popup = ({correctLetters,wrongLetters, selectedWord, setPlayable, onClick}) => {
    let finalMessage = '';
    let finalMessageRevealwWord = '';
    let playable = true;

    let status = checkWin(correctLetters, wrongLetters, selectedWord);
    console.log('', correctLetters, '', wrongLetters, selectedWord, 'status', status);
    if( status  === 'win'){
        finalMessage = 'Parabéns, você venceu!';        
        playable = false;
    }else if(status === 'lose'){
        finalMessage = 'Você perdeu!'
        finalMessageRevealwWord = selectedWord;
        playable = true;
    }

    useEffect(() => setPlayable(playable));
    return (
        <>
            <div className="popup-container" style={finalMessage !== '' ? {display:"flex"} : {}} >
                <div className="popup">
                    <span>{finalMessage}</span>
                    <span>{finalMessageRevealwWord}</span>
                    <button onClick={onClick}>Play Again</button>
                </div>
            </div>
        </>
    )
}
export default Popup;