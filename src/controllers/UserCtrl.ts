 const user = require('../models/user');
 import { Request, Response } from "express";

 const login = (req: Request, res: Response) => {
   console.log(req.body);
   try {
     console.log("se buscan")
     const query = {FirstName: req.body.user, Passwor: req.body.password}
     user.find(query, (err: any, finuser: any) => {
       console.log(err)
       console.log(finuser);
       if (err) {
         console.log("error if ");
         res.status(400).end(err);
         res.end();
       } else {
         console.log("else");
         res.status(200).send(finuser);
         res.end();
       }
     });
   } catch (error) {
     console.log("catch");
     console.log(error)
     res.status(400).end(error)
     res.end();
   }
 };

 const register = (req: Request, res: Response) => {
   console.log(req.body)
   try {
     const newUser = new user({
       FirstName: req.body.firstname,
       LastName: req.body.lastname,
       Email: req.body.email,
       Password: req.body.password,
       Age: req.body.age,
     });
     newUser.save((err: any, NewUser: any) => {
       if (err) {
         console.log(err);
         res.status(400).send({
           message: "Error al registrarte, intenta mas tarde porfavor.",
         });
         res.end();
       } else {
         console.log(NewUser);
         res.status(200).send(NewUser._id);
         res.end();
       }
     });
   } catch (error) {
     res.status(400).send(error)
     res.end();
   }
 };



export default {
    login,
    register
}