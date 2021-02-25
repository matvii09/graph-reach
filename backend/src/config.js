const dotenv = require('dotenv')

dotenv.config();



export default {
     PORT: process.env.PORT,
     MONGO_DATABASE: process.env.MONGO_DATABASE,
     MONGO_USER: process.env.MONGO_USER,
     MONGO_HOST: process.env.MONGO_HOST,
     MONGO_PASSWORD: process.env.PASSWORD

}
