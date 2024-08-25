// components/Lesson1IntroToCoding.js
import React from 'react';
import { Link } from 'react-router-dom';
import robotImage from '../../assets/cartoon-ai-robot-scene_23-2151675054.jpg';  // Import the robot image

function Lesson1IntroToCoding({ tokens, earnTokens }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Lesson 1: What is Coding?</h2>
      <p>
        Coding is like giving instructions to your favorite toy or pet. Imagine you have a toy robot. 
        You need to tell it what to do, like walk forward or turn around. Coding is the special language 
        you use to give these instructions.
      </p>
      <p>For now, there's no code to write—just think of coding as a way to communicate with computers!</p>
      <img src={robotImage} alt="A toy robot" />

      <div>
        <p>Your Tokens: {tokens}</p>
        <br/>
        <p>Click the "Earn Tokens" button to earn tokens for completing this lesson.</p>
        <button onClick={earnTokens}>Earn Tokens</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Link to="/course/intro-to-html/lesson2">
          <button>Next Lesson</button>
        </Link>
      </div>
    </div>
  );
}

export default Lesson1IntroToCoding;