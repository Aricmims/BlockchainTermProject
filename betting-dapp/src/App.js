import React, { useEffect, useState } from 'react'; 
import GameButton from "./GameButton";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


const App = props => {
  const [gotData, setGotData] = useState(false);
  const [todaysGames, setTodaysGames] = useState([]);
  const [gameButtons, setGameButtons] = useState([]);


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
    <Grid container>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" component="h1">
            <Box textAlign="center">
              Place a Bet
            </Box>
          </Typography>
        </Grid>
          {gameButtons.length > 0 && gameButtons[0].map((button) => (
            <Grid item xs={3}>
              {button}  
            </Grid>
          ))}
      </Grid>
    </Grid>

  )
}

export default App;