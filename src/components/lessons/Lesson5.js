// components/Lesson5.js
import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Lesson5() {
  const [colors, setColors] = useState(Array(26).fill('lightblue'));

  const handleClick = (index) => {
    const newColors = [...colors];
    newColors[index] = newColors[index] === 'lightblue' ? 'yellow' : 'lightblue';
    setColors(newColors);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ color: "#FF5722", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        Lesson 5: Making the Grid Interactive
      </Typography>
      <Typography variant="body1" sx={{ color: "#3F51B5", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        Now, let's make our alphabet grid interactive. When you click on a letter, it will change color!
      </Typography>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 50px)',
        gap: '10px',
        margin: "20px 0"
      }}>
        {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letter, index) => (
          <Box
            key={letter}
            sx={{
              width: '50px',
              height: '50px',
              backgroundColor: colors[index],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
            onClick={() => handleClick(index)}
          >
            {letter}
          </Box>
        ))}
      </Box>
      <Typography variant="body1" sx={{ color: "#3F51B5", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        Click on the letters to see their color change!
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#FF5722' }}>
          <Link to="/course/html-css/lesson4" style={{ textDecoration: 'none', color: 'white' }}>Previous Lesson</Link>
        </Button>
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#8BC34A' }}>
          <Link to="/course/html-css" style={{ textDecoration: 'none', color: 'white' }}>Finish Course</Link>
        </Button>
      </Box>
    </Box>
  );
}

export default Lesson5;