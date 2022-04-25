import { Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Instructions = (startClick) => {
  return (
    <div>
      <Paper variant="outlined" elevation={12} style={{ backgroundColor: "#1b1b1e" }}>
        <header className="App-header">
          {" "}
          <h1 className="header"> Welcome to Balloon Burst!</h1>
        </header>
        <div className="App-instruction">
          <ol>
            <br />
            <p>
              A game Designed for toddlers. Here is the instruction to play the Game Play the magic balloon games for
              toddlers and little kids as well as adults!
              <br />
              <br />
              Popping balloons and enjoy the joyful explosions. Babies can pop the balloons on the screen, collect
              points and enjoy vivid colors and exciting animations! For children with visual impairments such you can
              change the colour of the balloons in order to make them easier to pop. All game modes are suitable for
              young kids as an educational game.{" "}
            </p>
            <Divider className="divider" />
            <br />

            <Typography className="features" variant="h5" component="div" gutterBottom>
              {" "}
              FEATURES:{" "}
            </Typography>
            <p>Easy to play - just touch the balloon on the screen and it will blow up.</p>
            <li>Educational and entertaining</li>
            <li> Suitable for babies, adults, and toddlers</li>
            <li> Balloons of different colors.</li>

            <li>
              {" "}
              Learning the Numbers turning into fun! Mini Educational games for boys and girls with balloon popping
              games for your children!
            </li>
            <li>
              Little Children will enjoy this colorful balloon popping with different colors and Easy to play - just
              touch the balloon on the screen and it will blow up.
            </li>
            <li> Educational and entertaining</li>

            <p>
              Children will learn how to stay focused and learn different colors, numbers and shapes with the help of
              magic balloons. All family members will be happy with this app! Once the kids start popping balloons,
              they’ll fall in love with how easy and fun this pastime activity is! Most of children is amused by seeing
              balloons floating into the sky. Children have a fun even though they are surprising when the balloon
              popping sound is heard. Balloon Pop is a good game to play for kids as a game of popping various colors of
              balloons floating. The cheerful sound of various colors of balloons popping stimulate the curiosity of
              children. The time goes so quickly during balloon popping with mom and dad.
            </p>
          </ol>
          <Grid container alignItems={"center"} justifyContent={"center"} style={{ padding: 20 }}>
            <Link to={"/game"} className={"button button1"} onClick={startClick}>
              Tap to start
            </Link>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default Instructions;
