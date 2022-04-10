import React, { useState, useEffect } from "react";
import { Grid, Chip, Button, Stack, Typography } from "@mui/material";
import BalloonInitialImage from "../../images/balloon.png";
import BalloonBurstImage from "../../images/burst.png";
import Session from "./Session";
const axios = require("axios");

const Game = () => {
  const [totalScore, setTotalScore] = useState(0);
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

  return (
    <div>
      {balloons.length > 0 && !gameOver && <Session clicks={clicks} balloons={balloons} setGameOver={setGameOver} />}
      {gameOver && <h1>Game Over!</h1>}
    </div>
  );
};

export default Game;
