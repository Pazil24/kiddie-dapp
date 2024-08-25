// components/Lesson7FinalProject.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Lesson7FinalProject({ tokens, setTokens, redeemRewards }) {
  const [htmlCode, setHtmlCode] = useState(`
<h1 id="parkTitle">Welcome to Fun Park</h1>
<p>This park has the best rides in town!</p>
<img src="https://img.freepik.com/free-vector/amusement-park-scene-daytime-with-blank-bright-blue-sky_1308-46509.jpg?t=st=1724622238~exp=1724625838~hmac=9e925f977507794d38d940851849d5564720b81e969661654832b5e03321a0fb&w=740" alt="A thrilling roller coaster">
<br />
<button id="rideButton">Ride the Roller Coaster</button>
`);
  
  const [jsCode, setJsCode] = useState(`
document.getElementById('rideButton').onclick = function() {
  alert('Wheee! That was fun!');
};
`);

  const navigate = useNavigate();

  useEffect(() => {
    // Safely run the JavaScript code by appending it to the document as a script
    const script = document.createElement('script');
    script.innerHTML = jsCode;
    document.body.appendChild(script);

    // Clean up the script after it's run
    return () => {
      document.body.removeChild(script);
    };
  }, [jsCode]);

  const handleRedeemAndNavigate = () => {
    redeemRewards();  // Redeem rewards when the user finishes the course
    navigate("/");  // Navigate back to the home page
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Lesson 7: Final Project - Building a Fun Website</h2>
      <p>
        It's time to put everything together! Imagine you're building your own theme park on the web. You get to decide how it looks and what fun things people can do there.
      </p>
      <p>
        Create a webpage with a title, description, images, and interactive elements like buttons that do fun things!
      </p>
      <div style={{ marginBottom: '20px' }}>
        <textarea
          style={{ width: '100%', height: '100px' }}
          placeholder="Write your HTML here..."
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <textarea
          style={{ width: '100%', height: '100px', marginTop: '10px' }}
          placeholder="Write your JavaScript here..."
          value={jsCode}
          onChange={(e) => setJsCode(e.target.value)}
        />
      </div>
      <div id="preview" style={{ border: '1px solid black', padding: '10px' }} dangerouslySetInnerHTML={{ __html: htmlCode }} />

      <div style={{ marginTop: '20px' }}>
        <Link to="/course/simple-game/lesson6"><button>Previous Lesson</button></Link>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleRedeemAndNavigate}>Finish Course and Redeem Rewards</button>
      </div>
    </div>
  );
}

export default Lesson7FinalProject;