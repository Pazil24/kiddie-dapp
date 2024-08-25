import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { ChainlinkPlugin, MainnetPriceFeeds } from "@chainsafe/web3-plugin-chainlink";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import './App.css';
import Navbar from './components/NavBar';
import Footer from "./components/Footer";
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import TokenizedCoursePage from "./pages/TokenizedCoursePage";
import Lesson1 from './components/lessons/Lesson1';
import Lesson2 from './components/lessons/Lesson2';
import Lesson3 from './components/lessons/Lesson3';
import Lesson4 from './components/lessons/Lesson4';
import Lesson5 from './components/lessons/Lesson5';

import Lesson1IntroToCoding from "./components/rewardsLessons/tokenizedLesson1";
import Lesson2IntroToHTML from "./components/rewardsLessons/tokenizedLesson2";
import Lesson3BuildWebpage from "./components/rewardsLessons/tokenizedLesson3";
import Lesson4IntroToJavaScript from "./components/rewardsLessons/tokenizedLesson4";
import Lesson5InteractivePage from "./components/rewardsLessons/tokenizedLesson5";
import Lesson6SimpleGame from "./components/rewardsLessons/tokenizedLesson6";
import Lesson7FinalProject from "./components/rewardsLessons/tokenizedLesson7";

function App() {
  const [tokens, setTokens] = useState(0);
  const [rewards, setRewards] = useState([]);
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    async function initializeWeb3() {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3Instance = new Web3(window.ethereum);
        web3Instance.registerPlugin(new ChainlinkPlugin());
        setWeb3(web3Instance);
      } else {
        console.log("No Ethereum provider detected. Install MetaMask.");
      }
    }
    initializeWeb3();
  }, []);

  async function earnTokens() {
    if (web3) {
      const btcPrice = await web3.chainlink.getPrice(MainnetPriceFeeds.BtcUsd);
      const earned = parseInt(btcPrice.answer.toString().substring(0, 5)) % 10;
      setTokens(tokens + earned);
    }
  }

  function redeemRewards() {
    if (tokens >= 100) {
      setRewards([...rewards, { name: "New Book", icon: <FaBook /> }]);
      setTokens(tokens - 100);
    } else {
      console.log("Not enough tokens to redeem");
    }
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Pass tokens and other props to HomePage */}
          <Route path="/" element={<HomePage tokens={tokens} />} />
          <Route path="/course/html-css" element={<CoursePage />} />
          <Route path="/course/tokenized-lessons" element={<TokenizedCoursePage />} />
          
          {/* Pass tokens and earnTokens to the lesson components */}
          <Route path="/course/html-css/lesson1" element={<Lesson1 />} />
          <Route path="/course/html-css/lesson2" element={<Lesson2 />} />
          <Route path="/course/html-css/lesson3" element={<Lesson3 />} />
          <Route path="/course/html-css/lesson4" element={<Lesson4 />} />
          <Route path="/course/html-css/lesson5" element={<Lesson5 />} />
          
          {/* Pass tokens, setTokens, earnTokens, and redeemRewards to the tokenized lessons */}
          <Route path="/course/intro-to-coding/lesson1" element={<Lesson1IntroToCoding tokens={tokens} earnTokens={earnTokens} />} />
          <Route path="/course/intro-to-html/lesson2" element={<Lesson2IntroToHTML tokens={tokens} earnTokens={earnTokens} />} />
          <Route path="/course/build-webpage/lesson3" element={<Lesson3BuildWebpage tokens={tokens} earnTokens={earnTokens} />} />
          <Route path="/course/intro-to-javascript/lesson4" element={<Lesson4IntroToJavaScript tokens={tokens} earnTokens={earnTokens} />} />
          <Route path="/course/interactive-js/lesson5" element={<Lesson5InteractivePage tokens={tokens} earnTokens={earnTokens} />} />
          <Route path="/course/simple-game/lesson6" element={<Lesson6SimpleGame tokens={tokens} earnTokens={earnTokens} />} />
          <Route path="/course/final-project/lesson7" element={<Lesson7FinalProject tokens={tokens} setTokens={setTokens} redeemRewards={redeemRewards} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;