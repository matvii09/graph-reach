import Message from '../../models/Message';

const Mutation = {

    createMessage: async ( _, {title, content, author} ) => {
        const newMessage = new Message({title, content, author} );
        return await newMessage.save();
    },

    deleteMessage: async (_, {_id} ) => {
        return await Message.findByIdAndDelete( _id )
    }
    

}


export default Mutation