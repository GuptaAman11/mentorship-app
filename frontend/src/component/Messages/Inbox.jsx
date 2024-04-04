import React, { useState, useEffect } from "react";

const Inbox = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/messages/inbox/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data = await response.json();
        console.log(data);
        setMessages(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchMessages();
  }, [userId]);

  return (
    <div>
      <h2>Inbox</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {messages.map((message) => (
            <li key={message._id}>
              <strong>From:</strong> {message.sender.name}
              <br />
              <strong>Message:</strong> {message.content}
              <br />
              <small>{new Date(message.timestamp).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Inbox;
