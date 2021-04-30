import React, { useEffect, useState } from 'react'; 


const GameButton = (props) => {
    
    return (
        <button onClick={() => {
            //TODO: 
                // place a bet on the outcome of the specified game
                // render a new page which shows updates on the match the user just betted on
        }}> { props.home } vs. {props.away} </button>
    )

}

export default GameButton;