import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import logo from '../assets/kidleelogosvg2.svg';

function Navbar() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#FFC107' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img 
            src={logo} 
            alt="Kidlee Logo" 
            className='spin-animation' 
            style={{ width: '80px', marginRight: '10px', animation: 'spin 3s linear 0s 3' }}  // Spins 3 times over 3 seconds
          />
          <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            <span style={{ color: '#FF5722' }}>K</span>
            <span style={{ color: '#4CAF50' }}>i</span>
            <span style={{ color: '#3F51B5' }}>d</span>
            <span style={{ color: '#F57C00' }}>l</span>
            <span style={{ color: '#8BC34A' }}>e</span>
            <span style={{ color: '#FF7043' }}>e</span>
          </span>
        </Box>
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <Button color="inherit">
            <Link to="/" style={{ textDecoration: 'none', color: '#3F51B5' }}>Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="/course/html-css" style={{ textDecoration: 'none', color: '#3F51B5' }}>HTML & CSS Basics</Link>
          </Button>
          <Button color="inherit">
            <Link to="/course/tokenized-lessons" style={{ textDecoration: 'none', color: '#3F51B5' }}>Tokenized Lessons</Link>
          </Button>
          {/* Add more links to courses or lessons as needed */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;