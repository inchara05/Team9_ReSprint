import {
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CurrentSessionBoard = () => {
  const [currentSessionData, setCurrentSessionData] = useState([]);
  const [loading, setLoading] = useState(false);
  let currentSessionId = document.cookie.split("=")[1];
  useEffect(() => {
    const fetchCurrentSessionData = async () => {
      const { data } = await axios.get(`/api/getGamesForSession/${currentSessionId}`);
      console.log(data);
      setCurrentSessionData(data);
      setLoading(false);
    };
    fetchCurrentSessionData();
  }, []);

  const buildTable = (game, idx) => {
    return (
      <TableRow key={idx} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          <span style={{ color: "white" }}>{game.sessionId}</span>
        </TableCell>
        <TableCell align="right">
          {" "}
          <span style={{ color: "#15734d" }}>{game.score}</span>
        </TableCell>
      </TableRow>
    );
  };

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <Grid container sx={{ paddingTop: 3 }} justifyContent={"center"}>
          <header className="scores">
            <Typography variant="h3">Scores for this game</Typography>
          </header>
        </Grid>
        <br />
        <Grid container sx={{ paddingTop: 4 }} justifyContent={"center"}>
          <Typography varient="overline">
            <Link className="sessionGame" to={"/"}>
              Tap to start a New Game
            </Link>{" "}
          </Typography>
        </Grid>
        <br />

        <Grid container sx={{ paddingTop: 4 }} justifyContent={"center"}>
          <Card sx={{ maxWidth: 700 }}>
            <TableContainer className="scoreTable">
              <Table sx={{ minWidth: 650 }} style={{ backgroundColor: "black" }}>
                <TableHead className="scoreHead">
                  <TableRow>
                    <TableCell align="left">
                      <span style={{ color: "white" }}>SessionId</span>
                    </TableCell>
                    <TableCell align="right">
                      <span style={{ color: "white" }}>Score</span>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentSessionData &&
                    currentSessionData.gameDetails &&
                    currentSessionData.gameDetails.map((game, idx) => buildTable(game, idx))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </div>
    );
  }
};

export default CurrentSessionBoard;
