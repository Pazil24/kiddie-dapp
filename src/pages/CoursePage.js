import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

function CoursePage() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h3" sx={{ color: "#FF5722", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        HTML, CSS & JavaScript Basics
      </Typography>
      
      {/* HTML & CSS Lessons */}
      <Typography variant="h6" sx={{ color: "#FF9800", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        HTML & CSS Series
      </Typography>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Button variant="contained" color="primary" sx={{ margin: '10px', backgroundColor: '#8BC34A' }}>
            <Link to="/course/html-css/lesson1" style={{ textDecoration: 'none', color: 'white' }}>Lesson 1: Introduction to HTML and CSS</Link>
          </Button>
        </li>
        <li>
          <Button variant="contained" color="primary" sx={{ margin: '10px', backgroundColor: '#8BC34A' }}>
            <Link to="/course/html-css/lesson2" style={{ textDecoration: 'none', color: 'white' }}>Lesson 2: Understanding the Basics of HTML</Link>
          </Button>
        </li>
        <li>
          <Button variant="contained" color="primary" sx={{ margin: '10px', backgroundColor: '#8BC34A' }}>
            <Link to="/course/html-css/lesson3" style={{ textDecoration: 'none', color: 'white' }}>Lesson 3: Building Your First Webpage with HTML</Link>
          </Button>
        </li>
        <li>
          <Button variant="contained" color="primary" sx={{ margin: '10px', backgroundColor: '#8BC34A' }}>
            <Link to="/course/html-css/lesson4" style={{ textDecoration: 'none', color: 'white' }}>Lesson 4: Introduction to JavaScript</Link>
          </Button>
        </li>
        <li>
          <Button variant="contained" color="primary" sx={{ margin: '10px', backgroundColor: '#8BC34A' }}>
            <Link to="/course/html-css/lesson5" style={{ textDecoration: 'none', color: 'white' }}>Lesson 5: Making Your Webpage Interactive with JavaScript</Link>
          </Button>
        </li>
      </ul>
    </Box>
  );
}

export default CoursePage;