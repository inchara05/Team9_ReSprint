import React, { useState, useEffect } from "react";
import Balloon from "./Balloon";
import Timer from "./Timer";
import { Grid, Chip, Button, Stack, Typography } from "@mui/material";
const axios = require("axios");

const Game = () => {
  const TOTAL_BALLOONS = 31;
  const [clicks, setClicks] = useState(0);
  //console.log(clicks);
  const [width, setWidth] = useState(INITIAL_WIDTH);
  const [gameOver, setGameOver] = useState(false);
  const [availableBalloons, setAvailableBalloons] = useState(TOTAL_BALLOONS);
  const [acceptedPumpSequence, setAcceptedPumpSequence] = useState([]);
  const [sequenceHint, setSequenceHint] = useState("");
  const [gotBalloon, setGotBalloon] = useState(0); // handle case of getting a new balloon without redeeming
  const [isBalloonAlive, setIsBalloonAlive] = useState(true);

  useEffect(async () => {
    const fetchSequence = async () => {
      const { data } = await axios.get("/api/sequences");
      return data;
    };
    const sequenceData = await fetchSequence();
    setAcceptedPumpSequence(sequenceData.sequence);
    setSequenceHint(sequenceData.meta);
    console.log(acceptedPumpSequence, sequenceHint);
  }, []);

  useEffect(() => {
    setAvailableBalloons(availableBalloons - 1);
  }, [gotBalloon]);

  useEffect(() => {
    if (availableBalloons <= 0) {
      setGameOver(true);
    }
  }, [availableBalloons]);

  const redeemPoints = () => {
    console.log(clicks);
    setGotBalloon(gotBalloon + 1);
    if (clicks >= 0) {
      // burst balloon
      setIsBalloonAlive(false);
      return;
    }
    // resetCurrentBalloonState();
  };

  const resetCurrentBalloonState = () => {
    setIsBalloonAlive(true);
    setClicks(0);
    setGotBalloon(gotBalloon + 1);
    setWidth("5%");
  };
};
