import config from './config'
import mongoose from 'mongoose';


mongoose.connect( `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( db => console.log( 'Database is Connected' ) )
    .catch( err => console.log( err ) );