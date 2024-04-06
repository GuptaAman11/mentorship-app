import React, { useState } from "react";

const SendMessageForm = ({ recipientId, onSendMessage }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage({ recipientId, content });
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Message:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessageForm;
