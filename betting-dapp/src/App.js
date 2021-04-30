import React, { useEffect, useState } from 'react'; 
import GameButton from "./GameButton";

const generate_game_buttons = (todaysGames) => {
  let gameButtons = [];
  for(let i = 0; i < todaysGames.length; i++){
    //TODO: pass in actual info on games
    let awayTeam = todaysGames[i].teams.away.team.name;
    let homeTeam = todaysGames[i].teams.home.team.name;
    gameButtons.push(<GameButton home={homeTeam} away={awayTeam} gameId="bar" />)
  }
  return gameButtons;
}

const App = () => {
  const [gotData, setGotData] = useState(false);
  const [todaysGames, setTodaysGames] = useState([]);
  const [gameButtons, setGameButtons] = useState([]);

  //populate the matches for the day on startup
  useEffect(()=>{
    fetch("https://statsapi.web.nhl.com/api/v1/schedule")
    .then(res => res.json())
    .then(res => {
      if(res.status >= 400){
        throw new Error("Could not reach api endpoint. . .");
      } else {
        setTodaysGames(todaysGames.concat(res.dates));
        setGotData(true);
      }
    })
    .then(err => {
      setGotData(false);
    })
  },[])

  useEffect(() => {
    if(todaysGames.length !== 0){
      console.log(todaysGames[0].games.length);
      setGameButtons(prevButtons => [...prevButtons, generate_game_buttons(todaysGames[0].games)])
    }
  }, [todaysGames])


  
  return(
    //TODO: generate buttons for each game acquired in the initial request
    <div>
      <ul className="list-group">
        {gameButtons.length > 0 && gameButtons[0].map((button) => (
          <li>{button}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;