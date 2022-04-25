const mongoCollection = require("../config/mongoCollections");
const game = mongoCollection.game;
const uuid = require("uuid");

const recordGame = async (gameDetails) => {
  const gameCollection = await game();
  const gameToSave = {
    _id: uuid.v4(),
    sessionId: gameDetails.gameId,
    score: gameDetails.score,
  };
  const insertedMeta = await gameCollection.insertOne(gameToSave);
  console.log(insertedMeta.insertedId);
  return true;
};

const getGameDetailsBySessionId = async (sessionId) => {
  const gameCollection = await game();
  const gameDetails = await gameCollection.find({ sessionId }).toArray();
  return gameDetails;
};

module.exports = {
  recordGame,
  getGameDetailsBySessionId,
};
