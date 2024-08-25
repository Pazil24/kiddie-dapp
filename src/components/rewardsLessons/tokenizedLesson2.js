// components/Lesson2HTMLBasics.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import houseImage from '../../assets/legoblocks-house.jpg'  // Import the house image

function Lesson2HTMLBasics({ tokens, earnTokens }) {
  const [htmlCode, setHtmlCode] = useState('<h1>Welcome to My House</h1>');

  return (
    <div style={{ padding: '20px' }}>
      <h2>Lesson 2: Understanding the Basics of HTML</h2>
      <p>
        HTML is like the Lego blocks you use to build a house. Each block (or HTML tag) has a specific job, 
        like building a wall or a door.
      </p>
      <img src={houseImage} alt="A house made of Lego blocks" />
      <p>Let's build a simple house with HTML:</p>
      <textarea
        style={{ width: '100%', height: '100px' }}
        value={htmlCode}
        onChange={(e) => setHtmlCode(e.target.value)}
      />
      <div style={{ border: '1px solid black', padding: '10px', marginTop: '20px' }}>
        <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
      </div>

      <div>
        <p>Your Tokens: {tokens}</p>
        <br/>
        <p>Click the "Earn Tokens" button to earn tokens for completing this lesson.</p>
        <button onClick={earnTokens}>Earn Tokens</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Link to="/course/intro-to-coding/lesson1">
          <button>Previous Lesson</button>
        </Link>
        <Link to="/course/build-webpage/lesson3">
          <button>Next Lesson</button>
        </Link>
      </div>
    </div>
  );
}

export default Lesson2HTMLBasics;