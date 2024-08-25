// components/Lesson4.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Lesson4() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ color: "#FF5722", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        Lesson 4: Designing a Grid of Alphabets
      </Typography>
      <Typography variant="body1" sx={{ color: "#3F51B5", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        Now, let's create a grid with all the letters of the alphabet. We can style each letter with CSS to make them colorful and fun!
      </Typography>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 50px)',
        gap: '10px',
        margin: "20px 0"
      }}>
        {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map(letter => (
          <Box key={letter} sx={{
            width: '50px',
            height: '50px',
            backgroundColor: 'lightblue',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            fontWeight: 'bold'
          }}>
            {letter}
          </Box>
        ))}
      </Box>
      <Typography variant="body1" sx={{ color: "#3F51B5", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        This grid is created using the <code>display: grid</code> property, with each letter inside a styled <code>div</code> box.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#FF5722' }}>
          <Link to="/course/html-css/lesson3" style={{ textDecoration: 'none', color: 'white' }}>Previous Lesson</Link>
        </Button>
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#8BC34A' }}>
          <Link to="/course/html-css/lesson5" style={{ textDecoration: 'none', color: 'white' }}>Next Lesson</Link>
        </Button>
      </Box>
    </Box>
  );
}

export default Lesson4;