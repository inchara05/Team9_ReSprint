import React, { useState, useEffect } from "react";
import { Grid, Chip, Button, Stack, Typography } from "@mui/material";
import BalloonInitialImage from "../../images/balloon.png";
import BalloonBurstImage from "../../images/burst.png";
const GROWTH_FACTOR = 0.02;

const Balloon = ({ isBalloonAlive, handleBalloonClick }) => {
  // const [width, setWidth] = useState(initWidth);
  // console.log("Width :", width);
  let width = "5%";
  //   const handleBalloonPump = () => {
  //     let currentWidth = width.substring(0, width.length - 1);
  //     let currentWidthInDecimal = parseInt(currentWidth) / 100;
  //     let settingWidthInDecimal = currentWidthInDecimal + GROWTH_FACTOR;
  //     let settingWidth = settingWidthInDecimal * 100 + "%";
  //     setWidth(settingWidth);
  //   };

  return (
    <div>
      <Grid style={{ position: "fixed" }} container alignItems={"center"} justifyContent={"center"}>
        {isBalloonAlive && (
          <img
            alt="a balloon to play with"
            style={{ padding: "4%", width: width }}
            src={BalloonInitialImage}
            onClick={() => {
              handleBalloonClick();
              // handleBalloonPump();
            }}
          />
        )}
        {!isBalloonAlive && (
          <img
            style={{ padding: "13%", width: width, maxWidth: width }}
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
