// components/Lesson4IntroToJavaScript.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Lesson4IntroToJavaScript({ tokens, earnTokens }) { // Accept tokens and earnTokens as props
  const [jsCode, setJsCode] = useState(`
document.getElementById('title').onclick = function() {
  document.getElementById('title').style.color = 'blue';
};
`);

  const handleRunCode = () => {
    const script = document.createElement('script');
    script.textContent = jsCode;
    document.body.appendChild(script);
    document.body.removeChild(script);  // Clean up after running
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Lesson 4: Introduction to JavaScript</h2>
      <p>
        JavaScript is like the magic that makes things move or change colors on your webpage. 
        Imagine waving a magic wand and seeing your webpage come to life!
      </p>
      <div style={{ border: '1px solid black', padding: '10px', marginBottom: '20px' }}>
        <h1 id="title">Welcome to My House</h1>
        <p>This is a beautiful house with a big garden.</p>
        <img src="https://img.freepik.com/free-vector/house-nature-scene_1308-54916.jpg?t=st=1724621439~exp=1724625039~hmac=2831ef804963af4c8687eabd8f7f581c7f0836ad49a57b36878c40cc65a9636c&w=740" alt="A big house" />
      </div>
      <textarea
        style={{ width: '100%', height: '100px' }}
        value={jsCode}
        onChange={(e) => setJsCode(e.target.value)}
      />
      <p>Click on "Run JavaScript" then the title "Welcome to My House" above to change its color:</p>
      <button onClick={handleRunCode} style={{ marginTop: '20px' }}>Run JavaScript</button>

      <div>
        <p>Your Tokens: {tokens}</p>
        <br/>
        <p>Click the "Earn Tokens" button to earn tokens for completing this lesson.</p>
        <button onClick={earnTokens}>Earn Tokens</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Link to="/course/build-webpage/lesson3">
          <button>Previous Lesson</button>
        </Link>
        <Link to="/course/interactive-js/lesson5">
          <button>Next Lesson</button>
        </Link>
      </div>
    </div>
  );
}

export default Lesson4IntroToJavaScript;