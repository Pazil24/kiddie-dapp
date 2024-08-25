// components/Lesson2.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Lesson2() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ color: "#FF5722", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        Lesson 2: Creating Colorful Boxes
      </Typography>
      <Typography variant="body1" sx={{ color: "#3F51B5", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        Let's create some colorful boxes! Each box will have a different color. You can change the colors by editing the CSS.
      </Typography>
      <Box sx={{ display: 'flex', gap: '10px', margin: "20px 0" }}>
        <Box sx={{ width: '100px', height: '100px', backgroundColor: 'red' }}></Box>
        <Box sx={{ width: '100px', height: '100px', backgroundColor: 'green' }}></Box>
        <Box sx={{ width: '100px', height: '100px', backgroundColor: 'blue' }}></Box>
      </Box>
      <Typography variant="body1" sx={{ color: "#3F51B5", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        These boxes are created using the <code>div</code> tag and styled with CSS to have different background colors.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#FF5722' }}>
          <Link to="/course/html-css/lesson1" style={{ textDecoration: 'none', color: 'white' }}>Previous Lesson</Link>
        </Button>
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#8BC34A' }}>
          <Link to="/course/html-css/lesson3" style={{ textDecoration: 'none', color: 'white' }}>Next Lesson</Link>
        </Button>
      </Box>
    </Box>
  );
}

export default Lesson2;