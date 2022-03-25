import { Typography, Card, Grid } from "@mui/material";
import React from "react";
import Countdown from "react-countdown";

const Timer = ({ timeUpHandler }) => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      timeUpHandler();
      return <div>Time's up</div>;
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
