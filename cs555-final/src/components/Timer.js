import { Typography, Card, Grid } from "@mui/material";
import React from "react";
import Countdown from "react-countdown";

const Timer = ({}) => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <Card>
          <Grid container justifyContent={"center"}>
            <Typography variant="h6">Time's Up. Reset the game to start a new session.</Typography>
          </Grid>
        </Card>
      );
    } else {
      return (
        <Card>
          <Grid container justifyContent={"center"}>
            <Typography variant="h6">
              {hours}:{minutes}:{seconds}
            </Typography>
          </Grid>
        </Card>
      );
    }
  };
  return <Countdown date={Date.now() + 30000} renderer={renderer} />;
};

export default Timer;
