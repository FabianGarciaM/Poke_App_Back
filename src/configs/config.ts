export default {
  jwtSecret: process.env.JWT, 
  DB: {
    URI: process.env.DB_NAME || "mongodb://localhost:27017/PokeApp",
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
  },
};