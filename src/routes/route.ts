import express from 'express'
import UserCtrl from '../controllers/UserCtrl'
const router = express.Router();

router.get("/test", (_req, res) => {
  console.log("someone pinged ping !!!");
  res.send("pong");
});

router.post("/login", UserCtrl.login);
router.post("/register", UserCtrl.register);




export default router;