import React, { useEffect, useState } from 'react'; 


const App = () => {
  const [gotData, setGotData] = useState(false);

  return(
    <div>
      <button onClick={() => {
        //make API request and set gotData accordingly
        fetch("https://www.thesportsdb.com/api/v1/json/1/searchfilename.php?e=English_Premier_League_2015-04-26_Arsenal_vs_Chelsea")
        .then(res => {
          if(res.status >= 400){
            throw new Error("Could not reach api endpoint. . .");
          } else {
            setGotData(true);
            console.log("Sent Request");
          }
        })
        .then(err => {
          setGotData(false);
        })
      }}>this is a button</button>
    </div>
  )
}

export default App;