//Lesson3BuildWebpage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Lesson3BuildWebpage({ tokens, earnTokens }) {
  const [htmlCode, setHtmlCode] = useState(`
<h1>Welcome to My House</h1>
<p>This is a beautiful house with a big garden.</p>
<img src="https://img.freepik.com/free-vector/house-nature-scene_1308-54916.jpg?t=st=1724621439~exp=1724625039~hmac=2831ef804963af4c8687eabd8f7f581c7f0836ad49a57b36878c40cc65a9636c&w=740" alt="A big house">
`);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Lesson 3: Building Your First Webpage with HTML</h2>
      <p>
        Let's add some rooms and decorations to our house by adding more HTML tags.
      </p>
      <textarea
        style={{ width: '100%', height: '150px' }}
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
        <Link to="/course/intro-to-html/lesson2">
          <button>Previous Lesson</button>
        </Link>
        <Link to="/course/intro-to-javascript/lesson4">
          <button>Next Lesson</button>
        </Link>
      </div>
    </div>
  );
}

export default Lesson3BuildWebpage;