import React, { useState, useEffect } from "react";
import { Grid, Chip, Button, Stack, Typography } from "@mui/material";
import Balloon from "./Balloon";
import Timer from "../Timer";
const scoreScaleFactor = 5;

const Session = ({ clicks, balloons, setGameOver }) => {
  let sessionScore = 0;
  // const [initWidth, setInitWidth] = useState("5%");
  const [sessions, setSessions] = useState(30);
  let currentBalloon = balloons[(30 - sessions) % 5];
  const [isBalloonAlive, setIsBalloonAlive] = useState(true);
  let breakingPoint = currentBalloon.breakingPoint;
  console.log("currentBreakingPoint", breakingPoint);

  useEffect(() => {
    console.log("Component Rendered");
  }, []);

  const resetGame = () => {
    setSessions(sessions - 1);
    if (sessions === 0) {
      setGameOver(true);
      return;
    }
    // setInitWidth("5%");
    setIsBalloonAlive(true);
    clicks++;
  };

  const handleClick = () => {
    clicks++;
    if (clicks >= breakingPoint) setIsBalloonAlive(false);
    sessionScore += scoreScaleFactor;
    console.log(sessionScore);
  };

  return (
    <div>
      <Timer />
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Chip
          style={{ backgroundColor: "blanchedalmond", margin: 6 }}
          label={"Score acquired in this pump: " + sessionScore}
        />
        <Chip style={{ backgroundColor: "blanchedalmond", margin: 6 }} label={"Available Balloons: " + sessions} />
        <Chip style={{ backgroundColor: "blanchedalmond", margin: 6 }} label={"Total score: " + 0} />
      </Grid>
      <Grid container sx={{ padding: 4 }} justifyContent={"center"} alignItems={"center"}>
        <Button variant="outlined" onClick={resetGame}>
          Reset Session
        </Button>
        <Button variant="outlined">Redeem Points</Button>
      </Grid>
      <Balloon
        balloon={currentBalloon}
        // initWidth={initWidth}
        isBalloonAlive={isBalloonAlive}
        handleBalloonClick={handleClick}
      />
    </div>
  );
};

export default Session;
