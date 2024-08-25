import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

function TokenizedCoursePage() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h5" sx={{ color: "#4CAF50", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        Learn the basics of web development through fun, interactive lessons!
      </Typography>




      {/* Tokenized Lessons */}
      <Typography variant="h6" sx={{ color: "#FF9800", fontFamily: 'Comic Sans MS', margin: "20px 0" }}>
        Tokenized Lessons Series
      </Typography>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Button variant="contained" color="secondary" sx={{ margin: '10px', backgroundColor: '#03A9F4' }}>
            <Link to="/course/intro-to-coding/lesson1" style={{ textDecoration: 'none', color: 'white' }}>Lesson 1: Introduction to Coding</Link>
          </Button>
        </li>
        <li>
          <Button variant="contained" color="secondary" sx={{ margin: '10px', backgroundColor: '#03A9F4' }}>
            <Link to="/course/intro-to-html/lesson2" style={{ textDecoration: 'none', color: 'white' }}>Lesson 2: Understanding the Basics of HTML</Link>
          </Button>
        </li>
        <li>
          <Button variant="contained" color="secondary" sx={{ margin: '10px', backgroundColor: '#03A9F4' }}>
            <Link to="/course/build-webpage/lesson3" style={{ textDecoration: 'none', color: 'white' }}>Lesson 3: Building Your First Webpage with HTML</Link>
          </Button>
        </li>
        <li>
          <Button variant="contained" color="secondary" sx={{ margin: '10px', backgroundColor: '#03A9F4' }}>
            <Link to="/course/intro-to-javascript/lesson4" style={{ textDecoration: 'none', color: 'white' }}>Lesson 4: Introduction to JavaScript</Link>
          </Button>
        </li>
        <li>
          <Button variant="contained" color="secondary" sx={{ margin: '10px', backgroundColor: '#03A9F4' }}>
            <Link to="/course/interactive-js/lesson5" style={{ textDecoration: 'none', color: 'white' }}>Lesson 5: Making Your Webpage Interactive with JavaScript</Link>
          </Button>
        </li>
        <li>
          <Button variant="contained" color="secondary" sx={{ margin: '10px', backgroundColor: '#03A9F4' }}>
            <Link to="/course/simple-game/lesson6" style={{ textDecoration: 'none', color: 'white' }}>Lesson 6: Creating a Simple Game with JavaScript</Link>
          </Button>
        </li>
        <li>
          <Button variant="contained" color="secondary" sx={{ margin: '10px', backgroundColor: '#03A9F4' }}>
            <Link to="/course/final-project/lesson7" style={{ textDecoration: 'none', color: 'white' }}>Lesson 7: Final Project - Building a Fun Website</Link>
          </Button>
        </li>
      </ul>
      </Box>
  );
}

      export default TokenizedCoursePage;