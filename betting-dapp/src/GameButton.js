import React, { useEffect, useState } from 'react'; 


const GameButton = (props) => {
    const [label, setLabel] = useState(props.label);
    const [gameId, setGameId] = useState(props.gameId);

    return (
        <button onClick={() => {
            //TODO: 
                // place a bet on the outcome of the specified game
                // render a new page which shows updates on the match the user just betted on
        }}> { label } </button>
    )

}

export default GameButton;