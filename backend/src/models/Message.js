import {Schema, model } from 'mongoose';

const newMessage = new Schema({
    title: {
        type: String,
        require: true,
        trim: true
    },
    content: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    }

});

export default model( 'Message', newMessage );