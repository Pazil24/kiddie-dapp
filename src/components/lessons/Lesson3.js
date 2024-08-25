// components/Lesson3.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Lesson3() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ color: "#FF5722", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        Lesson 3: Drawing Shapes with CSS
      </Typography>
      <Typography variant="body1" sx={{ color: "#3F51B5", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        Did you know you can create shapes using CSS? Let's draw a square and a circle!
      </Typography>
      <Box sx={{ display: 'flex', gap: '20px', margin: "20px 0" }}>
        <Box sx={{ width: '100px', height: '100px', backgroundColor: 'purple' }}></Box>
        <Box sx={{
          width: '100px',
          height: '100px',
          backgroundColor: 'orange',
          borderRadius: '50%'
        }}></Box>
      </Box>
      <Typography variant="body1" sx={{ color: "#3F51B5", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        The purple box is a square, and the orange box is a circle! We used the <code>border-radius</code> property to make the circle.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#FF5722' }}>
          <Link to="/course/html-css/lesson2" style={{ textDecoration: 'none', color: 'white' }}>Previous Lesson</Link>
        </Button>
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#8BC34A' }}>
          <Link to="/course/html-css/lesson4" style={{ textDecoration: 'none', color: 'white' }}>Next Lesson</Link>
        </Button>
      </Box>
    </Box>
  );
}

export default Lesson3;