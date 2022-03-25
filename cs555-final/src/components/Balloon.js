import React, { useEffect, useState } from "react";
import { Grid, Chip, Button, Stack } from "@mui/material";
import BalloonInitialImage from "../images/balloon.png";
import BalloonBurstImage from "../images/burst.png";
import Timer from "./Timer";

const Balloon = ({ initWidth, clicks, breakingPoint, resetCurrentBalloonState }) => {
  const GROWTH_FACTOR = 0.02;
  const SCORE_FACTOR = 5;
  const [width, setWidth] = useState(initWidth);
  const [isBalloonAlive, setIsBalloonAlive] = useState(true);
  const [scoreForCurrentPump, setScoreForCurrentPump] = useState(0);

  // useEffect(() => {}, [clicks]);
  const handleBalloonPump = () => {
    // sets width of the balloon
    // get the accepted amount of pumps allowed for this session -> in balloonBreakingPoint
    // if (clicks <= breakingPoint) {
    const testBreakingState = 5;
    let currentWidth = width.substring(0, width.length - 1);
    let currentWidthInDecimal = parseInt(currentWidth) / 100;
    let settingWidthInDecimal = currentWidthInDecimal + GROWTH_FACTOR;
    let settingWidth = settingWidthInDecimal * 100 + "%";
    // setClicks(clicks + 1);
    setWidth(settingWidth);
    // calculate score for this session
    setScoreForCurrentPump(scoreForCurrentPump + SCORE_FACTOR);
    // } else {
    // break the balloon
    if (clicks > testBreakingState) resetCurrentBalloonState();
    //}
  };

  // this handles balloon pumps for one session

  return (
    <div>
      {/* <Timer timeUpHandler={resetFunc} /> */}
      <Grid style={{ position: "fixed" }} container alignItems={"center"} justifyContent={"center"}>
        {/* <Tooltip placement="bottom" title="Click on the balloon to pump it!"> */}
        {isBalloonAlive && (
          <img
            alt="a balloon to play with"
            style={{ padding: "4%", width: width, maxWidth: width }}
            src={BalloonInitialImage}
            onClick={handleBalloonPump}
          />
        )}
        {!isBalloonAlive && (
          <img
            style={{ padding: "13%", width: width, maxWidth: width }}
            alt="a balloon that has burst"
            src={BalloonBurstImage}
          />
        )}
        {/* </Tooltip> */}
      </Grid>
      <br></br>
    </div>
  );
};

export default Balloon;
