// components/HomePage.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import kidleelogo from '../assets/kidleelogosvg.svg';  // Update the path to your Kidlee logo
import backgroundImage from '../assets/rainbow-frame-cute-doodle-border-vector-no backgroung.png' // Update the path to your background image

function HomePage({tokens}) {
  return (
    <Box 
      sx={{ 
        padding: '20px', 
        textAlign: 'center',
        backgroundImage: `url(${backgroundImage})`,  // Update the path to your background image
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        minHeight: '100vh',  // Ensure the background covers the full viewport height
      }}
    >
      <Typography variant="h3" sx={{ color: "#FF5722", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        Welcome to Kidlee!
      </Typography>
      <Typography variant="h5" sx={{ color: "#4CAF50", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        Learn coding through fun and interactive lessons!
      </Typography>
      <img src={kidleelogo} alt="Kidlee Logo" className="App-logo" style={{ width: '150px', margin: '20px 0' }} />  {/* Adjust size as needed */}
      <Typography variant="body1" sx={{ color: "#3F51B5", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        Start your coding journey by exploring our courses.<br /> Earn Tokens when you take the tokenized course. <br /> <br/>Click below to get started!
      </Typography>
      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant="h6" sx={{ color: "#4CAF50", fontFamily: 'Comic Sans MS' }}>
          You have {tokens} tokens!
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#8BC34A', margin: '20px 0' }}>
          <Link to="/course/html-css" style={{ textDecoration: 'none', color: 'white' }}>Go to HTML & CSS Basics Course</Link>
        </Button>
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#FF7043', margin: '20px 0' }}>
          <Link to="/course/tokenized-lessons" style={{ textDecoration: 'none', color: 'white' }}>Go to Tokenized Advanced Lessons</Link>
        </Button>
      </Box>
    </Box>
  );
}

export default HomePage;