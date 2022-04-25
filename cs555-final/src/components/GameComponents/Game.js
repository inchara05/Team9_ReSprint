import React, { useState, useEffect } from "react";
import { Grid, Chip, Button, Stack, Typography } from "@mui/material";
import BalloonInitialImage from "../../images/balloon.png";
import BalloonBurstImage from "../../images/burst.png";
import start from "../../audioClips/start.mp3";
import Session from "./Session";
import GameOver from "./GameOver";
import hintImage from "../../images/bulb.png";
const axios = require("axios");
const uuid = require("uuid");

const startAudio = new Audio(start);

const Game = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [sessionId, setSessionId] = useState(uuid.v4());
  const [sequenceHint, setSequenceHint] = useState("");
  let clicks = 0;
  const [balloons, setBalloons] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const fetchSequence = async () => {
      const { data } = await axios.get("/api/sequences");
      const sequenceData = data;
      let acceptedPumpSequence = sequenceData.sequence; // [ 1, 2, 3, 4, 5 ]
      let fillBalloons = [];
      for (let i = 0; i < 30; i++) {
        fillBalloons.push({
          breakingPoint: acceptedPumpSequence[i % 5],
        });
      }
      setBalloons(fillBalloons);
      setSequenceHint(sequenceData.meta);
    };
    fetchSequence();
  }, []);

  const handleHint = () => {
    console.log(sequenceHint);
    alert(sequenceHint);
  };

  useEffect(() => {
    // handle when game gets over
  }, [gameOver]);

  return (
    <div
      onLoad={() => {
        startAudio.play();
      }}
    >
      {balloons.length > 0 && !gameOver && (
        <Session
          clicks={clicks}
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          balloons={balloons}
          setGameOver={setGameOver}
        />
      )}
      <Button
        className="hintButton"
        style={{ width: "25%" }}
        label="Hint"
        onClick={() => {
          handleHint();
        }}
      >
        <img alt="a balloon to play with" style={{ padding: "4%", width: "5%" }} src={hintImage}></img>
      </Button>
      {gameOver && <GameOver sessionId={sessionId} totalScore={totalScore} />}
    </div>
  );
};

export default Game;
