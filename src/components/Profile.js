import React, { useEffect, useState } from 'react';
import './Profile.css';

const Profile = ({ user }) => {
  const allMessages = user.messages || [];
  const [sentMessages, setSentMessages] = useState([]);
  const [receivedMessages, setReceivedMessages] = useState([]);

  useEffect(() => {
    const filteredSentMessages = allMessages.filter(
      (message) => message.fromUser._id === user._id
    );
    const filteredReceivedMessages = allMessages.filter(
      (message) => message.fromUser._id !== user._id
    );

    setSentMessages(filteredSentMessages);
    setReceivedMessages(filteredReceivedMessages);
  }, [allMessages, user._id]);

  return (
    <div className="profile-container">
      <h2>Your Messages</h2>
      <section>
        <h3>Sent Messages</h3>
        {sentMessages.map((message) => (
          <div key={message._id} className="message-box">
            <p>{message.content}</p>
            <p>
              To: {message.post.author.username} | Post: {message.post.title}
            </p>
          </div>
        ))}
      </section>
      <section>
        <h3>Received Messages</h3>
        {receivedMessages.map((message) => (
          <div key={message._id} className="message-box">
            <p>{message.content}</p>
            <p>From: {message.fromUser.username}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Profile;
