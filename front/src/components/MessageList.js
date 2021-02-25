import React from "react";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";

import "./messages.css";

const GET_MESSAGES = gql`
  {
    messages {
      _id
      title
      content
      author
    }
  }
`;

const DELETE_MESSAGES = gql`
  mutation DeleteMessage($_id: ID!) {
    deleteMessage(_id: $_id) {
      _id
    }
  }
`;

export const MessageList = () => {
  const { loading, error, data } = useQuery(GET_MESSAGES);

  const [deleteMessage] = useMutation(DELETE_MESSAGES);

  if (loading) return <p>loading data...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {data.messages.map(({ _id, title, content, author }) => (
          <div
            key={_id}
            className="card card-message m-2"
            onClick={async (e) => {
              await deleteMessage({ variables: { _id } });
            }}
          >
            <div className="card-body">
              <h4>{title}</h4>
              <p>{content}</p>
              <p>author: {author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
