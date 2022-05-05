import mongoose from "mongoose";
import config from '../configs/config';
import dotenv from "dotenv";
dotenv.config();



mongoose.connect(config.DB.URI);
const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log("Mongo DB connection stablished");
})

connection.on('error', err=>{
  console.log(err)
  process.exit(0);
});
// const connect = async () => {
//   //"mongodb+srv://<username>:<password>@cluster0-v6q0g.mongodb.net/test?retryWrites=true&w=majority";
//   const client: mongoose. = new mongoose.MongoClient(
//     "mongodb://localhost:27017/PokeApp"
//   );

//   await client.connect();

//   const db: mongoose.Db = client.db(process.env.DB_NAME);

//   // const gamesCollection: mongoDB.Collection = db.collection(
//   //   process.env.GAMES_COLLECTION_NAME
//   // );

//   // collections.games = gamesCollection;

//   console.log(`Successfully connected to database: ${db.databaseName}`);
// };

export default {
  //connect,
};
