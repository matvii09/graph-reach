import {server} from './server';
import './database'
import config from './config'

server.start({port: config.PORT}, ({port}) => {
    console.log('Server on port', port);
});





