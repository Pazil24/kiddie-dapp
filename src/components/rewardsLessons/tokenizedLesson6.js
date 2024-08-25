// components/Lesson6SimpleGame.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Lesson6SimpleGame({ tokens, earnTokens }) {
  const [jsCode, setJsCode] = useState(`
let score = 0;
document.getElementById('ball').onclick = function() {
  score += 1;
  alert('You caught the ball! Score: ' + score);
};
`);

  const handleRunCode = () => {
    const script = document.createElement('script');
    script.textContent = jsCode;
    document.body.appendChild(script);
    document.body.removeChild(script);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Lesson 6: Creating a Simple Game with JavaScript</h2>
      <p>
        Let's create a fun game where you can help a cat catch a ball. Each time the cat catches the ball, you get a point!
      </p>
      <div style={{ border: '1px solid black', padding: '10px', marginBottom: '20px' }}>
        <h1>Catch the Ball Game</h1>
        <div id="cat" style={{ fontSize: '50px' }}>🐱</div>
        <div id="ball" style={{ fontSize: '50px', cursor: 'pointer' }}>⚽</div>
      </div>
      <p>Click on Run JavaScript below then click on the ball as many times as you Dream</p>
      <textarea
        style={{ width: '100%', height: '100px' }}
        value={jsCode}
        onChange={(e) => setJsCode(e.target.value)}
      />
      <button onClick={handleRunCode} style={{ marginTop: '20px' }}>Run JavaScript</button>

      <div>
        <p>Your Tokens: {tokens}</p>
        <br/>
        <p>Click the "Earn Tokens" button to earn tokens for completing this lesson.</p>
        <button onClick={earnTokens}>Earn Tokens</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Link to="/course/interactive-js/lesson5">
          <button>Previous Lesson</button>
        </Link>
        <Link to="/course/final-project/lesson7">
          <button>Next Lesson</button>
        </Link>
      </div>
    </div>
  );
}

export default Lesson6SimpleGame;