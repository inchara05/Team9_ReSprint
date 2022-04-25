import { Grid, Typography, Paper, Divider } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import score from "../../audioClips/score.mp3";

const scoreAudio = new Audio(score);

const GameOver = ({ sessionId, totalScore }) => {
  let sessionIdFromCookie = document.cookie.split("=")[1];
  useEffect(() => {
    console.log("useEffect called");
    async function postData() {
      try {
        console.log(sessionIdFromCookie);
        const data = await axios.post("/api/recordSession", {
          totalScore,
          sessionId: sessionIdFromCookie,
        });
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
    postData();
  }, []);

  return (
    <div>
      <Paper variant="outlined" elevation={12} style={{ backgroundColor: "black" }}>
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <div>
            <header className="gameOver">
              <Typography className="overHeader" variant="h1">
                Game Over!
              </Typography>
            </header>
            <Divider />
            <br />
            <Typography className="gameScore" variant="h3">
              Your score in this game is <span className="score-res">{totalScore}</span>
            </Typography>
            <br />
            <nav>
              {/* <Typography className="gameScore" variant="h6"> */}
              <NavLink className="newGame" to={"/"}>
                New Game
              </NavLink>
              &nbsp;&nbsp;
              {/* to start a new game! */}
              {/* </Typography> */}
              {/* <Typography className="gameScore" variant="h5"> */}
              <NavLink
                className="checkScore"
                to={"/scores"}
                onMouseDown={() => {
                  scoreAudio.play();
                }}
              >
                Your Score
              </NavLink>
            </nav>
            {/* to checkout your scores! */}
            {/* </Typography> */}
          </div>
        </Grid>
      </Paper>
    </div>
  );
};

export default GameOver;
