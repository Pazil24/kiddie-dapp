// components/Lesson5InteractivePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Lesson5InteractivePage({ tokens, earnTokens }) {
  const [jsCode, setJsCode] = useState(`
document.getElementById('doorbell').onclick = function() {
  alert('Ding Dong!');
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
      <h2>Lesson 5: Making Your Webpage Interactive with JavaScript</h2>
      <p>
        Let's add a doorbell to our house. When someone clicks on the door, it will ring (display a message)!
      </p>
      <div style={{ border: '1px solid black', padding: '10px', marginBottom: '20px' }}>
        <h1 id="title">Welcome to My House</h1>
        <p>This is a beautiful house with a big garden.</p>
        <img src="https://img.freepik.com/free-vector/house-nature-scene_1308-54916.jpg?t=st=1724621439~exp=1724625039~hmac=2831ef804963af4c8687eabd8f7f581c7f0836ad49a57b36878c40cc65a9636c&w=740" alt="A big house" />
        <br />
        <button id="doorbell">Ring the Doorbell</button>
        <p>Remember to click on Run JavaScript before ringing the bell!</p>
      </div>
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
        <Link to="/course/intro-to-javascript/lesson4">
          <button>Previous Lesson</button>
        </Link>
        <Link to="/course/simple-game/lesson6">
          <button>Next Lesson</button>
        </Link>
      </div>
    </div>
  );
}

export default Lesson5InteractivePage;