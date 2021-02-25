import React, {useState} from "react";
import { gql } from "apollo-boost";
import {useMutation} from '@apollo/react-hooks'

const CREATE_MESSAGE = gql`
  mutation CreateMessage($title: String!, $content: String!, $author: String!) {
    createMessage(title: $title, content: $content, author: $author) {
      _id
      title
      content
      author
    }
  }
`;

export const MessageForm = () => {

    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const [author, setAuthor] = useState('')

    const handleChange = (e) => {
     
        let name = e.target.name
        let value = e.target.value

        switch (name){
            case "author":
                setAuthor(value);
                break;
            case "title":
                settitle(value);
                break;
            case "content":
                setcontent(value)
                break;
            default:
                break;
        }

    }

  
    const [createMessage] = useMutation(CREATE_MESSAGE)


  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form action="" onSubmit={async e => {
                e.preventDefault()
                await createMessage( {variables: {title, content, author }} )
                console.log('Success');
            }}>
              <div className="form-group">
                <h4 className=" text-center">Create a Message </h4>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="author"
                  placeholder="Author"
                  className="form-control"
                  value= {author}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="form-control"
                  value={title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="content"
                  rows="2"
                  placeholder="Write a Message"
                  className="form-control"
                  value={content}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                className="btn btn-success btn-block" 
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
