import React from "react";
import Inbox from "../Messages/Inbox";
import SendMessageForm from "../Messages/MessageForm";

const MessagingContainer = ({ userId }) => {
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       // Example: Fetch user's messages, recipient list, or other necessary data
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };

    //   fetchData();
    // }, [userId]);
  const handleSendMessage = async ({ recipientId, content }) => {
    try {
      await fetch("http://localhost:8000/api/v1/messages/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: userId,
          recipient: recipientId,
          content,
        }),
      });
      // Optionally, update state or show a success message
    } catch (err) {
      console.error(err);
      // Handle errors
    }
  };

  return (
    <div>
      <Inbox userId={userId} />
      <SendMessageForm recipientId={userId} onSendMessage={handleSendMessage} />
    </div>
  );
};

export default MessagingContainer;
