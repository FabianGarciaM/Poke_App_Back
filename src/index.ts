import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./routes/route";
import "./database/database";

//inicializaciones
const app = express();
app.set('port',process.env.PORT || 5000 );


//middlewares
dotenv.config();
app.use(helmet());
app.use(cors());
app.use(express.json()); //middleware que transforma la data que llega yreq.body a un json
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api", router);

app.listen(app.get('port'), () => {
  console.log('Server in port -->', app.get('port'));
});
