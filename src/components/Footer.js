// components/Footer.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { FaGithub } from 'react-icons/fa';  // Import the GitHub icon

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#FFC107', padding: '20px', textAlign: 'center', marginTop: 'auto' }}>
      <Typography variant="body1" sx={{ color: '#3F51B5', fontFamily: 'Comic Sans MS' }}>
        © {new Date().getFullYear()} Kidlee. All Rights Reserved.
      </Typography>
      <Typography variant="body2" sx={{ color: '#3F51B5', fontFamily: 'Comic Sans MS', marginTop: '10px' }}>
        Made with ❤️ by Pazil24
      </Typography>
      <Box sx={{ marginTop: '10px' }}>
        <Link href="https://github.com/Pazil24/kiddie-dapp" sx={{ color: '#3F51B5', textDecoration: 'none', marginRight: '15px' }}>
          <FaGithub size={30} /> {/* Adjust the size as needed */}
        </Link>
      </Box>
      <Typography variant="body2" sx={{ color: '#3F51B5', fontFamily: 'Comic Sans MS', marginTop: '10px' }}>
        <Link href="/privacy-policy" sx={{ color: '#3F51B5', textDecoration: 'none', marginRight: '15px' }}>Privacy Policy</Link>
        <Link href="/terms-of-service" sx={{ color: '#3F51B5', textDecoration: 'none', marginRight: '15px' }}>Terms of Service</Link>
        <Link href="/contact-us" sx={{ color: '#3F51B5', textDecoration: 'none' }}>Contact Us</Link>
      </Typography>
    </Box>
  );
}

export default Footer;