import React, { useState, useEffect } from "react";
import { Grid, Chip, Button, Stack, Typography } from "@mui/material";
import BalloonInitialImage from "../../images/balloon.png";
import BalloonBurstImage from "../../images/burst.png";
import audio1 from "../../audioClips/1.mpeg";
const GROWTH_FACTOR = 0.02;

const Balloon = ({ initWidth, isBalloonAlive, handleBalloonClick, shouldResetGame }) => {
  const [balloonWidth, setBalloonWidth] = useState(initWidth);
  const audio = new Audio(audio1);
  useEffect(() => {
    if (!isBalloonAlive) setBalloonWidth(50);
    if (shouldResetGame) setBalloonWidth(50);
  }, [isBalloonAlive, shouldResetGame]);

  const increaseBalloonSize = () => {
    setBalloonWidth(balloonWidth + 50);
  };
  return (
    <div>
      <Grid style={{ position: "fixed" }} container alignItems={"center"} justifyContent={"center"}>
        {isBalloonAlive && (
          <img
            alt="a balloon to play with"
            style={{ padding: "4%", width: balloonWidth }}
            src={BalloonInitialImage}
            onMouseDown={() => {
              audio.play();
            }}
            onClick={() => {
              handleBalloonClick();
              increaseBalloonSize();
            }}
          />
        )}
        {!isBalloonAlive && (
          <img
            style={{ padding: "13%", width: balloonWidth, maxWidth: balloonWidth }}
            alt="a balloon that has burst"
            src={BalloonBurstImage}
          />
        )}
      </Grid>
      <br></br>
    </div>
  );
};

export default Balloon;
