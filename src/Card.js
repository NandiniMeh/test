import React from 'react';
import './App.css';
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";

function Info(props) {
    const Temp = props.T;
    const boll = props.display;
    var currentdate = new Date(); 
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  return (
    <div className='main-card'>
      <main>
      <div classname="info">
      <div style={{width: '28%', marginLeft: '35%', marginTop: '5%'}} className="card-wrapper">
      <CardContent className="card">
        <Typography style={{textAlign: 'center'}}> <b>Today's Forecast </b><br></br> </Typography>
        <Typography style={{textAlign: 'center'}}>
          <b>{datetime}</b>
        </Typography>
        <Typography style={{textAlign: 'center'}} className="image-wrapper">
        <Typography style={{textAlign: 'center'}} className="image-wrapper">
          {boll &&
            <img src={"http://openweathermap.org/img/wn/" + props.res.weather?.[0].icon + "@2x.png"} class="icon" />
          }
        </Typography>
        </Typography>
        <Typography gutterBottom component="div" style={{textAlign: 'center'}}>
          <b>{props.condition}</b>
        </Typography>
        <Typography variant="body1" color="text.primary" style={{textAlign: 'center'}} className="description">
          <b>{props.res.weather?.[0].description} </b><br></br>
          <b>Temperature: </b>{Temp} <br></br>
          <b>Feels Like: </b>{props.feels_like} <br></br>
        </Typography>
        </CardContent>
    </div>
    </div>
        </main>
    </div>
  );
}

export default Info;


