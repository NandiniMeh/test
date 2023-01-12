import React from 'react';
import './App.css';
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";

function Info(props) {
    const Temp = props.T
  return (
    <div className='main-div'>
      <main>
      <Card sx={{width: '70%', marginLeft: '15%', marginTop: '5%'}}>
      <CardContent>
        <Typography style={{textAlign: 'center'}}> <b>Today's Forecast </b><br></br> </Typography>
        <Typography gutterBottom component="div" style={{textAlign: 'center'}}>
          {props.condition}
        </Typography>
        <Typography variant="body1" color="text.primary" style={{textAlign: 'center'}}>
          {props.res.weather?.[0].description} <br></br>
          Temperature: {Temp} <br></br>
          Feels Like: {props.feels_like} <br></br>
        </Typography>
        </CardContent>
    </Card>
        </main>
    </div>
  );
}

export default Info;


