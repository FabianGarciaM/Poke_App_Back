import mongoose from "mongoose";
import bcrypt from 'bcrypt';

export interface IUser extends mongoose.Document{
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  Age: number;
}

const UserSchems = new mongoose.Schema({
  FirstName: { type: String, required: true},
  LastName: { type: String, required: true },
  Email: { type: String, required: true, unique: true, trim:true },
  Password: { type: String, required: true },
  Age: {type: Number, required: true},
});

//hasheamos la contraseña del usuario ....
//con el pre del schema ejecutara la funcion antes de guardar la data.
UserSchems.pre('save', async function (next){
  const user = this;
  //controlamos con el if que detecte cuando estan modificando la contraseña
  //o cuando es un usuario nuevo
  //en caso contrario lo que pasara es que entrara al if y no ejecutara el hasheo del password
  if (!user.isModified("Password") || !user.isNew) return next();
  //const salt = await bcrypt.genSaltSync(10);
  user.password = await bcrypt.hash(user.Password, 10);
  //user.password = hash;
  next();
  // await bcrypt.genSalt(10, async (err, salt) => {
  //   if (err) return next();
  //   await bcrypt.hash(user.Password, salt, (err:any, hash:any) => {
  //     if (err) return next(err);
  //     console.log(hash);
  //     user.Password = hash;
  //     next();
  //   });
  // });
})

//comparando contraseñas si es el caso que son iguales retornara un true o false
UserSchems.methods.comparePassword = async function (password:string) : Promise<boolean>{
  return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model<IUser>('user', UserSchems);