const express = require("express");
const router = express.Router();
const { sequences } = require("../helpers/sequence");
const _ = require("lodash");
const game = require("../data/game");

router.get("/sequences", async (req, res) => {
  try {
    console.log("Getting a new random sequence.");
    const sequence = _.sample(sequences);
    const randomSequence = {
      sequence: sequence.acceptedSequence,
      meta: sequence.meta,
    };
    res.status(200).json(randomSequence);
    return;
  } catch (e) {
    console.log("Something went wrong.");
    res.status(500).json({ message: "Something went wrong" + e });
    return;
  }
});

router.post("/recordSession", async (req, res) => {
  try {
    console.log("Recording a session.");
    let gameToSave = {
      score: req.body.totalScore,
      gameId: req.body.sessionId,
    };
    const insertedGame = await game.recordGame(gameToSave);
    console.log(insertedGame);
    res.json({ success: true });
  } catch (e) {
    console.log(e);
    res.json({ success: false });
  }
});

router.get("/getGamesForSession/:sessionId", async (req, res) => {
  try {
    console.log("Getting the game details for session " + req.params.sessionId);
    const gameDetails = await game.getGameDetailsBySessionId(req.params.sessionId);
    res.status(200).json({ success: true, gameDetails });
  } catch (e) {
    console.log(e);
    res.json({ success: false });
  }
});

module.exports = router;
