// components/Lesson1.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Lesson1() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ color: "#FF5722", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        Lesson 1: Introduction to HTML and CSS
      </Typography>
      <p>
        HTML is like the structure of a house. It builds the foundation of your webpage. CSS is the paint and decorations that make your house look beautiful!
      </p>
      <img src="/images/html-css-example.png" alt="HTML and CSS Example" style={{ maxWidth: '100%', margin: '20px 0' }} />
      <div style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <h1 style={{ color: 'blue' }}>Hello, World!</h1>
        <p>This is a paragraph styled with CSS to change its color and background.</p>
      </div>
      <p>In the code above, the heading is blue, and the paragraph has a light grey background. Try changing the colors in the code below!</p>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button variant="contained" disabled sx={{ backgroundColor: '#BDBDBD' }}>Previous</Button>
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#8BC34A' }}>
          <Link to="/course/html-css/lesson2" style={{ textDecoration: 'none', color: 'white' }}>Next Lesson</Link>
        </Button>
      </Box>
    </Box>
  );
}

export default Lesson1;