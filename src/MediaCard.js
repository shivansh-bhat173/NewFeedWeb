import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState,useEffect} from 'react'
import axios from 'axios'
import Avatar from '@mui/material/Avatar';
import './App.css';

export default function MediaCard({user,loading,src, title, first, last,age,cell,username,email,location,id,registered}) {

  

 if(loading){
   return <h1>Loading...</h1>
 }
  
  var cardStyle = {
    card:{
      display: 'block',
      width: '50vw',
      transitionDuration: '0.3s',
      height: '70vh',
      objectFit:'center'

    },
    img:{
      display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  objectFit: "cover"
    }
}
console.log(user)
  return (
    <Card style={cardStyle.card} sx={{ maxWidth: 345 }} className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <div className='center-avatar'>
            
         
<Avatar
  style={cardStyle}
  alt="Remy Sharp"
  src={src}
  sx={{ width: 200, height: 200 }}
/>
  </div>
      <CardContent >
        <Typography gutterBottom variant="h4" component="div">
          {title+" "+first+" "+last}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          UID: {username}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Age: {age}
        </Typography>
        
        {/* <Typography variant="body2" color="text.secondary">
         jahbhbshjvhjb,ashjbh,ahsbhas
        </Typography> */}
      </CardContent>
      </div>
      <div className='flip-card-back'>
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          ID: {id!=null?id:"not available"}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          location: {location}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Registered: {registered}
        </Typography>
        {/* <Typography variant="body2" color="text.primary">
         A subtle professional looking for a job with experience of 5+ years in management and a lot of other things that would help the organization in a possibly credibalbe way
        </Typography> */}
      <Typography gutterBottom variant="h6" component="div">
          Contact no.: {cell}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        Email: {email}
        </Typography>
      </CardContent>
      </div>
      </div>
    </Card>
  );
}