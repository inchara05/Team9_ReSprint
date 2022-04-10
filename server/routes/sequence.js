const express = require("express");
const router = express.Router();
const { sequences } = require("../helpers/sequence");
const _ = require("lodash");

router.get("/sequences", async (req, res) => {
  try {
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

module.exports = router;
