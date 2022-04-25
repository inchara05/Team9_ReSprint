import React, { useState, useEffect } from "react";
import { Grid, Chip, Button, Stack, Typography, Paper } from "@mui/material";
import Balloon from "./Balloon";
import Timer from "../Timer";
import redeem from "../../audioClips/redeem.mpeg";
import reset from "../../audioClips/reset.mp3";
const scoreScaleFactor = 5;

const Session = ({ clicks, balloons, setGameOver, totalScore, setTotalScore }) => {
  let sessionScore = 0;
  const [sessions, setSessions] = useState(30);
  let currentBalloon = balloons[(30 - sessions) % 5];
  const [isBalloonAlive, setIsBalloonAlive] = useState(true);
  const [shouldResetGame, setShouldResetGame] = useState(false);
  const [initWidth, setInitWidth] = useState(50);
  let breakingPoint = currentBalloon.breakingPoint;
  console.log("currentBreakingPoint: ", breakingPoint);

  useEffect(() => {
    console.log("Component Rendered");
  }, []);

  const resetGame = () => {
    console.log("REset game called");
    setSessions(sessions - 1);
    if (sessions === 0) {
      setGameOver(true);
      return;
    }
    setInitWidth(50);
    setIsBalloonAlive(true);
    setShouldResetGame(true);
    clicks++;
  };
  const redeemAudio = new Audio(redeem);
  const resetAudio = new Audio(reset);
  const recordScore = () => {
    setTotalScore(totalScore + sessionScore);
    resetGame();
  };

  const handleClick = () => {
    clicks++;
    if (clicks >= breakingPoint) setIsBalloonAlive(false);
    sessionScore += scoreScaleFactor;
  };

  return (
    <div>
      <Paper variant="outlined" elevation={12} style={{ backgroundColor: "black" }}>
        <Timer
          sessions={sessions}
          setSessions={setSessions}
          setIsBalloonAlive={setIsBalloonAlive}
          setShouldResetGame={setShouldResetGame}
        />
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <br />
          <br />
          <Typography sx={{ paddingTop: 6, color: "white" }} className="losePrompt" variant="h5">
            Each click will increase your score by 5 points. If the balloon breaks, you lose all the points.
          </Typography>
        </Grid>
        <br />
        <br />
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Chip
            style={{ backgroundColor: "#15734d", color: "white", margin: 6 }}
            label={"Available Balloons: " + sessions}
          />
          <Chip
            style={{ backgroundColor: "#15734d", color: "white", margin: 6 }}
            label={"Total score: " + totalScore}
          />
        </Grid>
        <br />
        <br />
        <Grid container sx={{ padding: 4 }} justifyContent={"center"} alignItems={"center"}>
          <Stack spacing={2}>
            <Button
              className="redeem"
              style={{ backgroundColor: "#15734d", color: "white" }}
              variant="outlined"
              onMouseDown={() => {
                resetAudio.play();
              }}
              onClick={resetGame}
            >
              Reset Session
            </Button>
            <Button
              className="redeem"
              style={{ backgroundColor: "#15734d", color: "white" }}
              variant="outlined"
              onMouseDown={() => {
                redeemAudio.play();
              }}
              onClick={() => {
                recordScore();
              }}
            >
              Redeem Points
            </Button>
          </Stack>
        </Grid>
        <Balloon
          balloon={currentBalloon}
          isBalloonAlive={isBalloonAlive}
          shouldResetGame={shouldResetGame}
          handleBalloonClick={handleClick}
          initWidth={initWidth}
        />
      </Paper>
    </div>
  );
};

export default Session;
