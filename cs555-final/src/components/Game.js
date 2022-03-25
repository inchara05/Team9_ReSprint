import React, { useState, useEffect } from "react";
import Balloon from "./Balloon";
// import Timer from "./Timer";
import { Grid, Chip, Button, Stack, Typography } from "@mui/material";

const Game = () => {
  const acceptedPumpSequence = [1, 2, 3, 4, 5];
  const GROWTH_FACTOR = 0.02;
  const SCORE_FACTOR = 5;
  const INITIAL_WIDTH = "5%";
  const TOTAL_BALLOONS = 31;
  const INITIAL_WIDTH = "5%";
  const [clicks, setClicks] = useState(0);
  //console.log(clicks);
  const [width, setWidth] = useState(INITIAL_WIDTH);
  const [gameOver, setGameOver] = useState(false);
  const [availableBalloons, setAvailableBalloons] = useState(TOTAL_BALLOONS);

  const [gotBalloon, setGotBalloon] = useState(0); // handle case of getting a new balloon without redeeming
  const [isBalloonAlive, setIsBalloonAlive] = useState(true);
  const [scoreForCurrentPump, setScoreForCurrentPump] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

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

  return (
    <div>
      {/* {Let's integrate the timer component later on.} */}
      {!gameOver && (
        <div>
          <Timer timeUpHandler={resetCurrentBalloonState} />
          <Grid style={{ paddingTop: "7%" }} container alignItems={"center"} justifyContent={"center"}>
            <Stack direction="row" spacing={2}>
              <Chip
                style={{ backgroundColor: "blanchedalmond", margin: 6 }}
                label={"Score acquired in this pump: " + scoreForCurrentPump}
              />
              <Chip style={{ backgroundColor: "blanchedalmond", margin: 6 }} label={"Total Score: " + totalScore} />
              <Chip
                style={{ backgroundColor: "blanchedalmond", margin: 6 }}
                label={"Available Balloons: " + availableBalloons}
              />
            </Stack>
          </Grid>{" "}
          <Balloon
            initWidth={width}
            clicks={clicks}
            resetCurrentBalloonState={resetCurrentBalloonState}
            isBalloonAlive={isBalloonAlive}
          />{" "}
          <Grid container alignItems={"center"} justifyContent={"center"}>
            <Button style={{ margin: 6 }} variant="outlined" onClick={redeemPoints}>
              Redeem Points
            </Button>
            <Button style={{ margin: 6 }} variant="outlined" onClick={resetCurrentBalloonState}>
              Oops, Get me a new balloon
            </Button>
          </Grid>
        </div>
      )}
      {gameOver && <Typography variant="h1">Game Over!</Typography>}
    </div>
  );
};

export default Game;
